"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import { Button } from "./Button";

export const RESUME_FILE = "/resume.pdf";
export const RESUME_NAME = "Dip-Singha-Product-Designer-Resume.pdf";

/** Starts a file download of the resume without leaving the page. */
export function downloadResume() {
  const a = document.createElement("a");
  a.href = RESUME_FILE;
  a.download = RESUME_NAME;
  a.style.display = "none";
  document.body.appendChild(a);
  a.click();
  a.remove();
}

/**
 * Resume preview in a modal. A native <dialog> gives focus trapping, Escape to
 * close and focus return. The PDF is only requested once the modal is opened.
 */
export function ResumeModal({ open, onClose }: { open: boolean; onClose: () => void }) {
  const ref = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    const d = ref.current;
    if (!d) return;
    if (open && !d.open) d.showModal();
    if (!open && d.open) d.close();
  }, [open]);

  return (
    <dialog
      ref={ref}
      aria-labelledby="resume-title"
      onClose={onClose}
      onClick={(e) => {
        if (e.target === ref.current) onClose();
      }}
      className="m-0 h-full max-h-none w-full max-w-none bg-background p-0 backdrop:bg-[rgba(8,8,8,0.6)] md:m-auto md:h-[min(92vh,1000px)] md:w-[800px] md:max-w-[calc(100vw-48px)]"
    >
      {open && (
        <div className="flex h-full flex-col">
          <div className="flex items-center justify-between gap-4 px-6 py-3 md:px-8">
            <h2 id="resume-title" className="text-h3">
              Resume
            </h2>
            <button
              type="button"
              aria-label="Close resume"
              onClick={onClose}
              className="flex size-12 cursor-pointer items-center justify-center rounded-full hover:bg-surface-subtle"
            >
              <Image src="/images/icons/close.svg" alt="" width={24} height={24} />
            </button>
          </div>

          <div className="min-h-0 flex-1 bg-surface">
            <iframe
              src={`${RESUME_FILE}#toolbar=0&navpanes=0&view=FitH`}
              title="Dip Singha resume (PDF)"
              className="size-full border-0"
            />
          </div>

          <div className="flex flex-col gap-3 px-6 py-4 md:flex-row md:items-center md:justify-between md:px-8">
            <p className="text-caption text-text-secondary">
              Your download should start automatically. Can’t see the preview?{" "}
              <a
                href={RESUME_FILE}
                target="_blank"
                rel="noopener"
                className="underline underline-offset-4 hover:text-text-primary"
              >
                Open the PDF
              </a>
              .
            </p>
            <div className="flex gap-3">
              <Button variant="secondary" onClick={downloadResume} className="flex-1 md:flex-none">
                Download again
              </Button>
              <Button onClick={onClose} className="flex-1 md:flex-none">
                Close
              </Button>
            </div>
          </div>
        </div>
      )}
    </dialog>
  );
}
