import type { Metadata } from "next";
import Image from "next/image";
import { Button } from "@/components/Button";
import { Band, ProcessRow, ProcessStep } from "@/components/CaseStudy";
import { ContactButton } from "@/components/ContactButton";
import { Faq } from "@/components/Faq";
import { ResumeButton } from "@/components/ResumeButton";
import { SectionHeading } from "@/components/SectionHeading";
import { howIWork as d } from "@/lib/how-i-work";

export const metadata: Metadata = {
  title: { absolute: "How I work | Dip Singha" },
  description:
    "How Dip Singha works as a product designer, from research and flows to design systems and developer handoff.",
  alternates: { canonical: "/how-i-work" },
};

// Figma: How I work (Desktop 113:1773, Mobile 115:2794).
export default function HowIWorkPage() {
  return (
    <>
      {/* Hero */}
      <section className="mx-auto flex w-full max-w-[1176px] flex-col gap-8 px-6 pb-12 pt-12 md:pb-16 xl:px-0">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:gap-16">
          <div className="flex min-w-0 flex-1 flex-col gap-4">
            <p className="text-caption text-text-secondary">{d.hero.eyebrow}</p>
            <h1 className="text-h2">{d.hero.title}</h1>
            <p className="text-lead">{d.hero.lead}</p>
          </div>
          <div className="flex flex-col gap-3 md:w-[296px] md:shrink-0">
            <Button href="/projects/oneielts" className="w-full">
              Read the OneIELTS case study
            </Button>
            <ResumeButton variant="secondary" className="w-full" />
          </div>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {d.hero.images.map((src) => (
            <div key={src} className="relative h-[257px] overflow-hidden max-md:nth-[n+2]:hidden md:h-[300px]">
              <Image
                src={src}
                alt=""
                fill
                priority
                sizes="(min-width: 1176px) 376px, (min-width: 768px) 33vw, 100vw"
                className="object-cover"
              />
            </div>
          ))}
        </div>
      </section>

      {/* What I bring to a team */}
      <Band className="flex flex-col gap-12">
        <SectionHeading wide title={d.bring.title} intro={d.bring.intro} />
        <div className="grid gap-6 md:grid-cols-3">
          {d.bring.cards.map((c) => (
            <ProcessStep key={c.number} {...c} />
          ))}
        </div>
      </Band>

      {/* My process, step by step */}
      <Band tone="surface" className="flex flex-col gap-6">
        <SectionHeading wide title={d.process.title} intro={d.process.intro} />
        <div className="h-6" aria-hidden />
        {d.process.rows.map((r) => (
          <ProcessRow key={r.number} {...r} label="What comes out of it" />
        ))}
      </Band>

      {/* See it in action */}
      <Band>
        <div className="flex flex-col items-center gap-8 lg:flex-row lg:gap-16">
          <div className="relative h-[280px] w-full shrink-0 overflow-hidden md:h-[400px] lg:w-[560px]">
            <Image
              src={d.example.image}
              alt=""
              fill
              sizes="(min-width: 768px) 560px, 100vw"
              className="object-cover"
            />
          </div>
          <div className="flex min-w-0 flex-1 flex-col items-start gap-4">
            <p className="text-caption text-text-secondary">{d.example.caption}</p>
            <h2 className="text-title">{d.example.title}</h2>
            <p className="text-body text-text-secondary">{d.example.text}</p>
            <Button href={d.example.href}>{d.example.cta}</Button>
          </div>
        </div>
      </Band>

      {/* Work with me */}
      {/* Anchor for the footer's "Work with me" link. The sticky navbar offset comes
          from the site-wide scroll-padding-top (96px) in globals.css, so no extra
          scroll-margin is added here (it would double the gap). */}
      <div id="work-with-me">
      <Band tone="surface" className="flex flex-col items-center gap-12">
        <SectionHeading wide title={d.workWithMe.title} intro={d.workWithMe.intro} />
        <div className="grid w-full gap-6 md:grid-cols-3">
          {d.workWithMe.cards.map((c) => (
            <ProcessStep key={c.number} {...c} />
          ))}
        </div>
        <ContactButton className="w-full md:w-auto">Let’s talk</ContactButton>
      </Band>
      </div>

      {/* FAQ */}
      <Band className="flex flex-col gap-12">
        <SectionHeading title={d.faq.title} intro={d.faq.intro} />
        <Faq items={d.faq.items} />
      </Band>
    </>
  );
}
