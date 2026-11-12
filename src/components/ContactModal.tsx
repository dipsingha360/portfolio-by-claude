"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useRef,
  useState,
  type FormEvent,
  type ReactNode,
} from "react";
import { site } from "@/lib/data";

type Step = "form" | "sending" | "sent";

const ContactContext = createContext<{ open: () => void }>({ open: () => {} });

export function useContact() {
  return useContext(ContactContext);
}

const SENDING_MS = 1500; // Figma: Contact sending -> sent after 1.5s

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

  const open = useCallback(() => {
    setStep("form");
    dialogRef.current?.showModal();
  }, []);

  const close = useCallback(() => dialogRef.current?.close(), []);

  const backToSite = useCallback(() => {
    close();
    // Mobile prototype navigates to Home; desktop just closes the overlay.
    if (window.matchMedia("(max-width: 767px)").matches) router.push("/");
  }, [close, router]);

  // Sending -> sent after 1.5s
  useEffect(() => {
    if (step !== "sending") return;
    const t = setTimeout(() => setStep("sent"), SENDING_MS);
    return () => clearTimeout(t);
  }, [step]);

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    // Resend delivery is wired in a later step; the UI flow follows the prototype.
    setStep("sending");
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

            <fieldset disabled={step === "sending"} className="flex flex-col gap-5">
              <div className="flex flex-col gap-4 md:flex-row">
                <label className="text-label flex flex-1 flex-col gap-2">
                  Full name
                  <input name="name" required autoComplete="name" placeholder="Jane Cooper" className={`${field} font-normal`} />
                </label>
                <label className="text-label flex flex-1 flex-col gap-2">
                  Email
                  <input name="email" type="email" required autoComplete="email" placeholder="you@company.com" className={`${field} font-normal`} />
                </label>
              </div>
              <label className="text-label flex flex-col gap-2">
                Message
                <textarea name="message" required rows={4} placeholder="What would you like to talk about?" className={`${field} resize-none font-normal`} />
              </label>
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
