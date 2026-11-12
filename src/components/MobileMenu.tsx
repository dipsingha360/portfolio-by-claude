"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef } from "react";
import { Button } from "./Button";
import { useContact } from "./ContactModal";
import { site } from "@/lib/data";

function isCurrent(pathname: string, href: string) {
  return href === "/" ? pathname === "/" : pathname.startsWith(href);
}

/**
 * Figma: Menu — Mobile. Full-screen overlay below `md`: logo + close, large
 * links, then the contact prompt, email and social icons at the bottom.
 * A native <dialog> gives focus trapping, Escape to close and focus return.
 */
export function MobileMenu({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) {
  const pathname = usePathname();
  const { open: openContact } = useContact();
  const ref = useRef<HTMLDialogElement>(null);

  // Keep the dialog in step with the `open` prop.
  useEffect(() => {
    const d = ref.current;
    if (!d) return;
    if (open && !d.open) d.showModal();
    if (!open && d.open) d.close();
  }, [open]);

  // Close if the screen grows past the mobile layout while the menu is open.
  useEffect(() => {
    if (!open) return;
    const mq = window.matchMedia("(min-width: 768px)");
    const onChange = () => mq.matches && onClose();
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, [open, onClose]);

  return (
    <dialog
      ref={ref}
      id="mobile-menu"
      aria-label="Menu"
      onClose={onClose}
      className="m-0 h-full max-h-none w-full max-w-none overflow-y-auto bg-background p-0 md:hidden"
    >
      <div className="flex min-h-full flex-col gap-8 px-6 pb-10 pt-6">
        <div className="flex items-center justify-between">
          <Link
            href="/"
            onClick={onClose}
            className="text-[22px] font-semibold leading-8"
          >
            {site.name}
          </Link>
          <button
            type="button"
            aria-label="Close menu"
            onClick={onClose}
            className="flex size-12 cursor-pointer items-center justify-center rounded-full hover:bg-surface-subtle"
          >
            <Image src="/images/icons/close.svg" alt="" width={24} height={24} />
          </button>
        </div>

        <nav aria-label="Mobile" className="flex flex-col">
          {site.nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={onClose}
              aria-current={isCurrent(pathname, item.href) ? "page" : undefined}
              className="flex items-center justify-between border-b border-surface-subtle py-4"
            >
              <span className="text-h2">{item.label}</span>
              <span aria-hidden className="text-h3 text-text-secondary">
                →
              </span>
            </Link>
          ))}
        </nav>

        <div className="flex-1" />

        <div className="flex flex-col items-start gap-4">
          <p className="text-label">Have a role or a project in mind?</p>
          <Button
            className="w-full"
            onClick={() => {
              // Close the menu first, then open the contact form.
              ref.current?.close();
              openContact();
            }}
          >
            Let’s talk &nbsp;↗
          </Button>
          <a href={`mailto:${site.email}`} className="text-body text-text-secondary">
            {site.email}
          </a>
          <ul className="flex gap-2">
            {site.socials.map((s) => (
              <li key={s.label}>
                <a
                  href={s.href}
                  aria-label={s.label}
                  className="flex size-12 items-center justify-center rounded-full hover:bg-surface-subtle"
                >
                  <Image src={s.icon} alt="" width={24} height={24} />
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </dialog>
  );
}
