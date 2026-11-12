"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { ContactButton } from "./ContactButton";
import { site } from "@/lib/data";

function isCurrent(pathname: string, href: string) {
  return href === "/" ? pathname === "/" : pathname.startsWith(href);
}

/** Figma: Sections / Navbar. Desktop shows links, mobile shows the menu button. */
export function Header() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="bg-background">
      <div className="flex items-center justify-between px-6 py-3 md:px-gutter-md md:py-6">
        <Link href="/" className="text-label">
          {site.name}
        </Link>

        <nav aria-label="Main" className="hidden items-center gap-8 md:flex">
          {site.nav.map((item) => {
            const current = isCurrent(pathname, item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                aria-current={current ? "page" : undefined}
                className="text-label relative flex min-h-touch min-w-touch items-center p-3 hover:underline hover:underline-offset-8"
              >
                {item.label}
                {current && (
                  <span className="absolute bottom-2 left-3 right-3 h-0.5 bg-text-primary" />
                )}
              </Link>
            );
          })}
        </nav>

        <div className="hidden md:block">
          <ContactButton>Let’s talk</ContactButton>
        </div>

        <button
          type="button"
          className="text-label -mr-3 flex min-h-touch min-w-touch cursor-pointer items-center justify-center p-3 md:hidden"
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
          onClick={() => setMenuOpen((v) => !v)}
        >
          {menuOpen ? "Close" : "Menu"}
        </button>
      </div>

      {menuOpen && (
        <nav
          id="mobile-menu"
          aria-label="Mobile"
          className="flex flex-col gap-2 border-t border-surface-subtle px-6 py-6 md:hidden"
        >
          {site.nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              aria-current={isCurrent(pathname, item.href) ? "page" : undefined}
              onClick={() => setMenuOpen(false)}
              className="text-h3 flex min-h-touch items-center"
            >
              {item.label}
            </Link>
          ))}
          <ContactButton className="mt-4 w-full">Let’s talk &nbsp;↗</ContactButton>
        </nav>
      )}
    </header>
  );
}
