"use client";

import type { MouseEvent } from "react";
import { buttonClasses } from "./Button";

const FILE = "/resume.pdf";
const FILE_NAME = "Dip-Singha-Product-Designer-Resume.pdf";

/**
 * "Download resume": one click opens the PDF in a new tab (preview) and also
 * downloads it. Without JavaScript it is a normal link to the PDF.
 */
export function ResumeButton({
  wide,
  className = "",
  children = "Download resume",
}: {
  wide?: boolean;
  className?: string;
  children?: string;
}) {
  function onClick(e: MouseEvent<HTMLAnchorElement>) {
    e.preventDefault();
    // Both run inside the same click, so browsers do not treat the new tab as a pop-up.
    const a = document.createElement("a");
    a.href = FILE;
    a.download = FILE_NAME;
    a.style.display = "none";
    document.body.appendChild(a);
    a.click();
    a.remove();
    window.open(FILE, "_blank", "noopener");
  }

  return (
    <a
      href={FILE}
      target="_blank"
      rel="noopener"
      onClick={onClick}
      aria-label="Download resume (PDF, also opens a preview in a new tab)"
      className={buttonClasses("primary", wide, className)}
    >
      {children}
    </a>
  );
}
