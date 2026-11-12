"use server";

import { headers } from "next/headers";
import { createClient } from "@supabase/supabase-js";
import { Resend } from "resend";
import { z } from "zod";

/**
 * Contact form delivery.
 *
 * Each message is (1) saved to the Supabase table `contact_messages` and
 * (2) emailed to CONTACT_TO_EMAIL through Resend, with the visitor's email as
 * Reply-To so replying from your inbox goes straight to them. Either step is
 * optional; the message counts as delivered if at least one of them works.
 * Secrets stay on the server: nothing here is sent to the browser.
 */

const schema = z.object({
  name: z
    .string()
    .trim()
    .min(1, "Please enter your name.")
    .max(100, "Please use 100 characters or fewer."),
  email: z
    .string()
    .trim()
    .max(254, "That email address is too long.")
    .pipe(z.email("Please enter a valid email address.")),
  message: z
    .string()
    .trim()
    .min(10, "Please write at least 10 characters.")
    .max(4000, "Please keep your message under 4,000 characters."),
});

type Field = "name" | "email" | "message";

export type ContactResult =
  | { ok: true }
  | { ok: false; fieldErrors?: Partial<Record<Field, string>>; message?: string };

const GENERIC_FAILURE =
  "Sorry, your message couldn’t be sent. Please try again in a moment.";

// Best-effort limit per server instance: 5 messages per IP per 10 minutes.
const WINDOW_MS = 10 * 60 * 1000;
const MAX_PER_WINDOW = 5;
const hits = new Map<string, number[]>();

function rateLimited(ip: string) {
  const now = Date.now();
  const recent = (hits.get(ip) ?? []).filter((t) => now - t < WINDOW_MS);
  recent.push(now);
  hits.set(ip, recent);
  if (hits.size > 1000) {
    for (const [key, times] of hits) {
      if (times.every((t) => now - t >= WINDOW_MS)) hits.delete(key);
    }
  }
  return recent.length > MAX_PER_WINDOW;
}

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

type Message = { name: string; email: string; message: string };

/**
 * Save a copy of the message in Supabase (table `contact_messages`).
 * Returns true when saved, false when it failed, null when Supabase is not configured.
 * The publishable key can only INSERT (row level security), never read.
 */
async function saveToSupabase({ name, email, message }: Message): Promise<boolean | null> {
  const url = process.env.SUPABASE_URL;
  const key = process.env.SUPABASE_PUBLISHABLE_KEY;
  if (!url || !key) return null;
  try {
    const supabase = createClient(url, key, {
      auth: { persistSession: false, autoRefreshToken: false },
    });
    // No .select() here: reading the row back would need read permission.
    const { error } = await supabase.from("contact_messages").insert({ name, email, message });
    if (error) {
      console.error("[contact] Supabase rejected the message:", error.code, error.message);
      return false;
    }
    return true;
  } catch (err) {
    console.error("[contact] Saving to Supabase failed:", err);
    return false;
  }
}

/**
 * Email the message to the owner through Resend, with the visitor as Reply-To.
 * Returns true when sent, false when it failed, null when email is not configured.
 */
async function sendEmail({ name, email, message }: Message): Promise<boolean | null> {
  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.CONTACT_TO_EMAIL;
  const from = process.env.CONTACT_FROM_EMAIL || "Portfolio <onboarding@resend.dev>";
  if (!apiKey || !to) return null;

  // Header-safe: no line breaks in the subject.
  const safeName = name.replace(/[\r\n]+/g, " ");
  try {
    const resend = new Resend(apiKey);
    const { error } = await resend.emails.send({
      from,
      to,
      replyTo: email,
      subject: `New message from ${safeName}`,
      text: `New message from ${safeName} <${email}>\n\n${message}\n\n(Sent from the contact form on your portfolio.)`,
      html: `<p><strong>${escapeHtml(safeName)}</strong> &lt;${escapeHtml(email)}&gt; wrote:</p><p>${escapeHtml(message).replace(/\n/g, "<br>")}</p><hr><p style="color:#555">Sent from the contact form on your portfolio. Reply to this email to answer ${escapeHtml(safeName)}.</p>`,
    });
    if (error) {
      console.error("[contact] Resend rejected the message:", error.name, error.message);
      return false;
    }
    return true;
  } catch (err) {
    console.error("[contact] Sending email failed:", err);
    return false;
  }
}

export async function sendContact(formData: FormData): Promise<ContactResult> {
  // Hidden field that real visitors never fill. Bots do. Pretend it worked.
  if (String(formData.get("website") ?? "").trim() !== "") return { ok: true };

  const parsed = schema.safeParse({
    name: formData.get("name"),
    email: formData.get("email"),
    message: formData.get("message"),
  });
  if (!parsed.success) {
    const flat = z.flattenError(parsed.error).fieldErrors;
    const fieldErrors: Partial<Record<Field, string>> = {};
    for (const key of ["name", "email", "message"] as const) {
      const first = flat[key]?.[0];
      if (first) fieldErrors[key] = first;
    }
    return { ok: false, fieldErrors };
  }

  const h = await headers();
  const ip = (h.get("x-forwarded-for") ?? h.get("x-real-ip") ?? "unknown").split(",")[0].trim();
  if (rateLimited(ip)) {
    return {
      ok: false,
      message: "You’ve sent a few messages already. Please try again in a few minutes.",
    };
  }

  // Save first, then email. The visitor's message counts as delivered if either
  // worked, so a failing email service no longer loses it.
  const saved = await saveToSupabase(parsed.data);
  const emailed = await sendEmail(parsed.data);

  if (saved === true || emailed === true) return { ok: true };

  if (saved === null && emailed === null) {
    console.error(
      "[contact] Nothing is configured: set RESEND_API_KEY + CONTACT_TO_EMAIL and/or SUPABASE_URL + SUPABASE_PUBLISHABLE_KEY",
    );
  }
  return { ok: false, message: GENERIC_FAILURE };
}
