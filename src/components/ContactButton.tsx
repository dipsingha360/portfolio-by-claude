"use client";

import type { ComponentProps } from "react";
import { Button } from "./Button";
import { useContact } from "./ContactModal";

/** Any "Let's talk" button: opens Contact, as wired in the Figma prototype. */
export function ContactButton(props: Omit<ComponentProps<typeof Button>, "onClick" | "href">) {
  const { open } = useContact();
  return <Button {...props} onClick={open} />;
}

/** Text-link style trigger, used for the footer "Contact" link. */
export function ContactLink({ className, children }: { className?: string; children: React.ReactNode }) {
  const { open } = useContact();
  return (
    <button type="button" onClick={open} className={className}>
      {children}
    </button>
  );
}
