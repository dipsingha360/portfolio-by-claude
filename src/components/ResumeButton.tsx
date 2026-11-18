"use client";

import { useState, type MouseEvent } from "react";
import { buttonClasses } from "./Button";
import { RESUME_FILE, ResumeModal, downloadResume } from "./ResumeModal";

/**
 * "Download resume": one click downloads the PDF and shows it in a modal.
 * Without JavaScript it is a normal link to the PDF.
 */
export function ResumeButton({
  variant = "primary",
  wide,
  className = "",
  children = "Download resume",
}: {
  variant?: "primary" | "secondary";
  wide?: boolean;
  className?: string;
  children?: string;
}) {
  const [open, setOpen] = useState(false);

  function onClick(e: MouseEvent<HTMLAnchorElement>) {
    e.preventDefault();
    downloadResume();
    setOpen(true);
  }

  return (
    <>
      <a
        href={RESUME_FILE}
        onClick={onClick}
        aria-haspopup="dialog"
        aria-label="Download resume (PDF) and preview it"
        className={buttonClasses(variant, wide, className)}
      >
        {children}
      </a>
      <ResumeModal open={open} onClose={() => setOpen(false)} />
    </>
  );
}
