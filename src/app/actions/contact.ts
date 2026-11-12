"use server";

import { headers } from "next/headers";
import { Resend } from "resend";
import { z } from "zod";

/**
 * Contact form delivery.
 *
 * Messages are emailed to CONTACT_TO_EMAIL through Resend. The visitor's email
 * is set as Reply-To, so replying from your inbox goes straight to them.
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

  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.CONTACT_TO_EMAIL;
  const from = process.env.CONTACT_FROM_EMAIL || "Portfolio <onboarding@resend.dev>";
  if (!apiKey || !to) {
    console.error("[contact] RESEND_API_KEY or CONTACT_TO_EMAIL is not set");
    return { ok: false, message: GENERIC_FAILURE };
  }

  const { name, email, message } = parsed.data;
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
      return { ok: false, message: GENERIC_FAILURE };
    }
    return { ok: true };
  } catch (err) {
    console.error("[contact] Sending failed:", err);
    return { ok: false, message: GENERIC_FAILURE };
  }
}
