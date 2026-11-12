import type { Metadata } from "next";
import Image from "next/image";
import { Button } from "@/components/Button";
import { Badge, Band, ProcessRow, ProcessStep, StatCard, TwoColumn } from "@/components/CaseStudy";
import { ContactButton } from "@/components/ContactButton";
import { SectionHeading } from "@/components/SectionHeading";
import { about as a } from "@/lib/about";

export const metadata: Metadata = {
  title: "About",
  description: a.hero.lead,
};

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="mx-auto w-full max-w-[1176px] px-6 py-12 md:py-16 xl:px-0">
        <div className="flex flex-col gap-12 lg:flex-row lg:items-center lg:gap-16">
          <div className="flex min-w-0 flex-1 flex-col items-start gap-6">
            <p className="text-caption text-text-secondary">{a.hero.eyebrow}</p>
            <h1 className="text-display">{a.hero.title}</h1>
            <p className="text-lead">{a.hero.lead}</p>
            <p className="text-body text-text-secondary">{a.hero.text}</p>
            <div className="flex flex-wrap gap-3">
              <Button href="/resume.pdf">Download resume</Button>
              <ContactButton variant="secondary">Let’s talk</ContactButton>
            </div>
          </div>
          <div className="relative aspect-[520/560] w-full max-w-[520px] shrink-0 overflow-hidden lg:h-[560px] lg:w-[520px]">
            <Image
              src={a.hero.image}
              alt="Portrait of Dip Singha"
              fill
              priority
              sizes="(min-width: 1024px) 520px, 100vw"
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* Quick facts */}
      <Band tone="surface" compact>
        <div className="flex flex-col gap-6 md:flex-row">
          {a.facts.map((f) => (
            <StatCard key={f.label} {...f} />
          ))}
        </div>
      </Band>

      {/* 01 My story */}
      <Band>
        <TwoColumn caption={a.story.caption} title={a.story.title}>
          {a.story.paragraphs.map((p) => (
            <p key={p} className="text-body text-text-secondary">
              {p}
            </p>
          ))}
        </TwoColumn>
      </Band>

      {/* My journey */}
      <Band tone="surface" className="flex flex-col gap-6">
        <SectionHeading wide title={a.journey.title} intro={a.journey.intro} />
        <div className="h-6" aria-hidden />
        {a.journey.rows.map((r) => (
          <ProcessRow key={r.title} {...r} label="Focus" />
        ))}
      </Band>

      {/* What I'm good at */}
      <Band className="flex flex-col gap-12">
        <SectionHeading wide title={a.skills.title} intro={a.skills.intro} />
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {a.skills.cards.map((c) => (
            <ProcessStep key={c.number} {...c} />
          ))}
        </div>
      </Band>

      {/* 02 Tools */}
      <Band tone="surface" compact>
        <TwoColumn caption={a.tools.caption} title={a.tools.title}>
          <p className="text-body text-text-secondary">{a.tools.text}</p>
          <div className="flex flex-wrap gap-2">
            {a.tools.chips.map((c) => (
              <Badge key={c}>{c}</Badge>
            ))}
          </div>
        </TwoColumn>
      </Band>

      {/* How I like to work */}
      <Band className="flex flex-col gap-12">
        <SectionHeading wide title={a.habits.title} intro={a.habits.intro} />
        <div className="grid gap-6 md:grid-cols-3">
          {a.habits.cards.map((c) => (
            <ProcessStep key={c.number} {...c} />
          ))}
        </div>
      </Band>
    </>
  );
}
