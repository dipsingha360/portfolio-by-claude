import Image from "next/image";
import Link from "next/link";
import { ContactButton, ContactLink } from "./ContactButton";
import { site } from "@/lib/data";
import { bandPadding, container } from "@/lib/layout";

const linkCls =
  "text-label flex min-h-touch min-w-touch items-center p-3 hover:underline hover:underline-offset-8";

/** Figma: Sections / Contact and footer. */
export function Footer() {
  return (
    <footer className={`bg-surface py-16 md:py-section ${bandPadding}`}>
      <div className={`${container} flex flex-col gap-8 md:gap-12`}>
        <div className="flex flex-col items-start justify-between gap-4 md:flex-row">
          <div className="flex w-full max-w-[420px] flex-col items-start gap-4">
            <p className="text-h3">
              Have a role or a<br />
              project in mind?
            </p>
            <ContactButton>Let’s talk &nbsp;↗</ContactButton>
          </div>
          <a href={`mailto:${site.email}`} className="text-h3 break-all">
            {site.email}
          </a>
        </div>

        <div className="flex flex-col gap-6 md:flex-row md:gap-16">
          <nav aria-label="Explore" className="flex flex-col gap-2 md:gap-1">
            <p className="text-caption text-text-secondary">Explore</p>
            <Link href="/" className={linkCls}>Home</Link>
            <Link href="/projects" className={linkCls}>Projects</Link>
            <Link href="/services" className={linkCls}>Services</Link>
            <Link href="/about" className={linkCls}>About</Link>
          </nav>
          <nav aria-label="More" className="flex flex-col gap-2 md:gap-1">
            <p className="text-caption text-text-secondary">More</p>
            <Link href="/blog" className={linkCls}>Blog</Link>
            <ContactLink className={`${linkCls} cursor-pointer`}>Contact</ContactLink>
          </nav>
          <nav aria-label="Connect" className="flex flex-col gap-2 md:gap-1">
            <p className="text-caption text-text-secondary">Connect</p>
            <a href={site.socials[2].href} className={linkCls}>LinkedIn</a>
            <a href={site.socials[1].href} className={linkCls}>Dribbble</a>
            <a href={site.socials[3].href} className={linkCls}>Email</a>
          </nav>
        </div>

        <div className="flex flex-col gap-6">
          <ul className="flex flex-wrap items-center gap-x-0 gap-y-2">
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
          <hr className="h-px border-0 bg-surface-subtle" />
          <div className="text-caption flex flex-col justify-between gap-2 text-text-secondary md:flex-row">
            <p>Designed and built by {site.name}</p>
            <p>© 2026 {site.name}. All rights reserved.</p>
          </div>
          <p
            aria-hidden
            className="text-display flex flex-col gap-2 md:flex-row md:gap-6"
          >
            <span>Dip</span>
            <span>Singha</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
