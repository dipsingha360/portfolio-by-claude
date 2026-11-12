"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { ContactButton } from "./ContactButton";
import { MobileMenu } from "./MobileMenu";
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

        <div className="flex items-center gap-2 md:hidden">
          <ContactButton>Let’s talk</ContactButton>
          <button
            type="button"
            aria-label="Open menu"
            aria-haspopup="dialog"
            aria-controls="mobile-menu"
            onClick={() => setMenuOpen(true)}
            className="flex size-12 cursor-pointer items-center justify-center rounded-full hover:bg-surface-subtle"
          >
            <Image src="/images/icons/menu.svg" alt="" width={24} height={24} />
          </button>
        </div>
      </div>

      <MobileMenu open={menuOpen} onClose={() => setMenuOpen(false)} />
    </header>
  );
}
