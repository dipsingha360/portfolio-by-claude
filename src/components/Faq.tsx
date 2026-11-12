"use client";

import { useState } from "react";

type Item = { q: string; a: string };

/** Figma: Sections / FAQ — accordion, first item open by default. */
export function Faq({ items }: { items: Item[] }) {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <div className="flex w-full flex-col gap-4">
      {items.map((item, i) => {
        const isOpen = open === i;
        return (
          <div key={item.q} className="border border-surface-subtle bg-background">
            <h3>
              <button
                type="button"
                aria-expanded={isOpen}
                aria-controls={`faq-panel-${i}`}
                id={`faq-trigger-${i}`}
                onClick={() => setOpen(isOpen ? null : i)}
                className="flex w-full cursor-pointer items-center justify-between gap-4 p-6 text-left transition-colors hover:bg-surface"
              >
                <span className="text-label flex-1">{item.q}</span>
                <span aria-hidden className="text-h3">
                  {isOpen ? "−" : "+"}
                </span>
              </button>
            </h3>
            {isOpen && (
              <div
                id={`faq-panel-${i}`}
                role="region"
                aria-labelledby={`faq-trigger-${i}`}
                className="px-6 pb-6"
              >
                <p className="text-body text-text-secondary">
                  {item.a || "Answer coming soon."}
                </p>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
