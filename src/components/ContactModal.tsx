"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import {
  createContext,
  useCallback,
  useContext,
  useRef,
  useState,
  type FormEvent,
  type ReactNode,
} from "react";
import { sendContact, type ContactResult } from "@/app/actions/contact";
import { site } from "@/lib/data";

type Step = "form" | "sending" | "sent";

const ContactContext = createContext<{ open: () => void }>({ open: () => {} });

export function useContact() {
  return useContext(ContactContext);
}

// Keep "Sending…" on screen at least this long so the state is readable.
const MIN_SENDING_MS = 600;
const FAILURE = "Sorry, your message couldn’t be sent. Please try again in a moment.";

type FieldErrors = Partial<Record<"name" | "email" | "message", string>>;

const field =
  "min-h-12 w-full rounded-control border border-border-control bg-background px-4 py-3 text-body placeholder:text-text-secondary";

/**
 * Figma prototype: every "Let's talk" opens Contact.
 * Desktop = centered modal over a 60% dark backdrop; mobile = full-screen form.
 * Flow: form -> sending (1.5s) -> sent -> "Back to the site"
 * (desktop closes the overlay, mobile goes Home).
 */
export function ContactProvider({ children }: { children: ReactNode }) {
  const router = useRouter();
  const dialogRef = useRef<HTMLDialogElement>(null);
  const [step, setStep] = useState<Step>("form");
  const [errors, setErrors] = useState<FieldErrors>({});
  const [banner, setBanner] = useState<string | null>(null);

  const open = useCallback(() => {
    setStep("form");
    setErrors({});
    setBanner(null);
    dialogRef.current?.showModal();
  }, []);

  const close = useCallback(() => dialogRef.current?.close(), []);

  const backToSite = useCallback(() => {
    close();
    // Mobile prototype navigates to Home; desktop just closes the overlay.
    if (window.matchMedia("(max-width: 767px)").matches) router.push("/");
  }, [close, router]);

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form); // read before the fields are disabled
    setErrors({});
    setBanner(null);
    setStep("sending");

    const started = Date.now();
    let result: ContactResult;
    try {
      result = await sendContact(data);
    } catch {
      result = { ok: false, message: FAILURE };
    }
    const wait = MIN_SENDING_MS - (Date.now() - started);
    if (wait > 0) await new Promise((r) => setTimeout(r, wait));

    if (result.ok) {
      form.reset();
      setStep("sent");
    } else {
      setErrors(result.fieldErrors ?? {});
      setBanner(result.fieldErrors ? null : (result.message ?? FAILURE));
      setStep("form");
    }
  }

  return (
    <ContactContext.Provider value={{ open }}>
      {children}
      <dialog
        ref={dialogRef}
        aria-labelledby="contact-title"
        className="m-0 h-full max-h-none w-full max-w-none bg-background p-0 backdrop:bg-[rgba(8,8,8,0.6)] md:m-auto md:h-fit md:max-h-[calc(100vh-48px)] md:w-[560px] md:overflow-auto"
        onClick={(e) => {
          if (e.target === dialogRef.current) close();
        }}
      >
        {step === "sent" ? (
          <div className="flex flex-col items-center gap-4 px-6 pb-10 pt-12 text-center md:px-10">
            <Image src="/images/icons/success.svg" alt="" width={64} height={64} />
            <h2
              id="contact-title"
              className="text-[32px] font-bold leading-10 md:text-[40px] md:leading-[48px]"
            >
              Thanks, your message is on its way
            </h2>
            <p className="text-body text-text-secondary">
              Thanks for reaching out. I’ll reply within 1 working day.
            </p>
            <button
              type="button"
              onClick={backToSite}
              className="text-label h-12 cursor-pointer rounded-control bg-action-primary px-5 text-text-inverse"
            >
              Back to the site
            </button>
          </div>
        ) : (
          <form onSubmit={onSubmit} className="flex flex-col gap-6 p-6 md:p-10">
            <div className="flex items-start gap-4">
              <div className="flex min-w-0 flex-1 flex-col gap-2">
                <h2
                  id="contact-title"
                  className="text-[32px] font-bold leading-10 md:text-[40px] md:leading-[48px]"
                >
                  Let’s talk
                </h2>
                <p className="text-body text-text-secondary">
                  Have a role or project in mind? Send me a note and I’ll get back to you within 1
                  working day.
                </p>
              </div>
              <button
                type="button"
                aria-label="Close"
                onClick={close}
                className="flex size-12 shrink-0 cursor-pointer items-center justify-center rounded-full hover:bg-surface-subtle"
              >
                <Image src="/images/icons/close.svg" alt="" width={24} height={24} />
              </button>
            </div>

            {banner && (
              <p role="alert" className="text-body border border-error p-4 text-error">
                {banner}{" "}
                <a href={`mailto:${site.email}`} className="underline">
                  Email me instead
                </a>
              </p>
            )}

            <fieldset disabled={step === "sending"} className="flex flex-col gap-5">
              <div className="flex flex-col gap-4 md:flex-row">
                <div className="flex flex-1 flex-col gap-2">
                  <label htmlFor="contact-name" className="text-label">
                    Full name
                  </label>
                  <input
                    id="contact-name"
                    name="name"
                    required
                    autoComplete="name"
                    placeholder="Jane Cooper"
                    aria-invalid={errors.name ? true : undefined}
                    aria-describedby={errors.name ? "contact-name-error" : undefined}
                    className={`${field} ${errors.name ? "border-error" : ""}`}
                  />
                  {errors.name && (
                    <p id="contact-name-error" role="alert" className="text-caption text-error">
                      {errors.name}
                    </p>
                  )}
                </div>
                <div className="flex flex-1 flex-col gap-2">
                  <label htmlFor="contact-email" className="text-label">
                    Email
                  </label>
                  <input
                    id="contact-email"
                    name="email"
                    type="email"
                    required
                    autoComplete="email"
                    placeholder="you@company.com"
                    aria-invalid={errors.email ? true : undefined}
                    aria-describedby={errors.email ? "contact-email-error" : undefined}
                    className={`${field} ${errors.email ? "border-error" : ""}`}
                  />
                  {errors.email && (
                    <p id="contact-email-error" role="alert" className="text-caption text-error">
                      {errors.email}
                    </p>
                  )}
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="contact-message" className="text-label">
                  Message
                </label>
                <textarea
                  id="contact-message"
                  name="message"
                  required
                  rows={4}
                  placeholder="What would you like to talk about?"
                  aria-invalid={errors.message ? true : undefined}
                  aria-describedby={errors.message ? "contact-message-error" : undefined}
                  className={`${field} resize-none ${errors.message ? "border-error" : ""}`}
                />
                {errors.message && (
                  <p id="contact-message-error" role="alert" className="text-caption text-error">
                    {errors.message}
                  </p>
                )}
              </div>
              {/* Spam trap: hidden from people, filled in by bots. */}
              <input
                type="text"
                name="website"
                tabIndex={-1}
                autoComplete="off"
                aria-hidden="true"
                className="absolute -left-[9999px] h-0 w-0 opacity-0"
              />
            </fieldset>

            <hr className="h-px border-0 bg-surface-subtle" />

            <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
              <p className="text-caption text-text-secondary">
                Prefer email? Write to{" "}
                <a href={`mailto:${site.email}`} className="underline">
                  {site.email}
                </a>
              </p>
              <button
                type="submit"
                aria-busy={step === "sending"}
                disabled={step === "sending"}
                className="text-label h-12 shrink-0 cursor-pointer rounded-control bg-action-primary px-5 text-text-inverse disabled:cursor-wait disabled:opacity-70"
              >
                {step === "sending" ? "Sending…" : "Send message"}
              </button>
            </div>
          </form>
        )}
      </dialog>
    </ContactContext.Provider>
  );
}
