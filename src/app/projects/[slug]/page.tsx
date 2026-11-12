import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Button } from "@/components/Button";
import { Badge, Band, MetaItem, ProcessStep, StatCard, TwoColumn } from "@/components/CaseStudy";
import { ProjectCard } from "@/components/Cards";
import { ReviewCard } from "@/components/Reviews";
import { SectionHeading } from "@/components/SectionHeading";
import { caseStudy as c } from "@/lib/case-study";
import { primaryDetail, projects } from "@/lib/data";

// The Figma prototype designs one project detail (OneIELTS) and every project
// card links to it, so each project slug renders that template.
export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: PageProps<"/projects/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  if (!projects.some((p) => p.slug === slug)) return {};
  return {
    title: c.title,
    description: c.lead,
    alternates: { canonical: `/projects/${primaryDetail.project}` },
  };
}

export default async function ProjectDetailPage({ params }: PageProps<"/projects/[slug]">) {
  const { slug } = await params;
  if (!projects.some((p) => p.slug === slug)) notFound();

  const more = projects.filter((p) => p.slug === "onepte" || p.slug === "calldoc");

  return (
    <>
      {/* Hero */}
      <section className="mx-auto flex w-full max-w-[1176px] flex-col gap-8 px-6 pb-12 pt-12 md:pb-16 xl:px-0">
        <Link
          href="/projects"
          className="text-label flex min-h-[52px] w-fit items-center hover:underline hover:underline-offset-8 md:min-h-touch"
        >
          ←&nbsp;&nbsp;All projects
        </Link>
        <div className="flex flex-col gap-4">
          <p className="text-caption whitespace-pre-wrap text-text-secondary">{c.eyebrow}</p>
          <h1 className="text-h2">{c.title}</h1>
          <p className="text-lead">{c.lead}</p>
        </div>
        <hr className="h-px border-0 bg-surface-subtle" />
        <dl className="grid grid-cols-2 gap-4 md:flex md:flex-row md:gap-6">
          {c.meta.map((m) => (
            <MetaItem key={m.label} {...m} />
          ))}
        </dl>
        <Button href="#at-a-glance" className="w-full md:w-fit">
          See full case study &nbsp;↗
        </Button>
        <div className="relative h-[186px] w-full overflow-hidden md:h-[640px]">
          <Image
            src={c.hero}
            alt=""
            fill
            priority
            sizes="(min-width: 1176px) 1176px, 100vw"
            className="object-cover"
          />
        </div>
      </section>

      {/* At a glance */}
      <Band tone="surface" id="at-a-glance" className="flex flex-col gap-8">
        <h2 className="text-h3">At a glance</h2>
        <div className="flex flex-col gap-6 md:flex-row">
          {c.glance.map((s) => (
            <StatCard key={s.label} {...s} />
          ))}
        </div>
      </Band>

      {/* 01 The challenge */}
      <Band>
        <TwoColumn caption={c.challenge.caption} title={c.challenge.title}>
          {c.challenge.paragraphs.map((p) => (
            <p key={p} className="text-body text-text-secondary">
              {p}
            </p>
          ))}
          <div className="flex flex-col gap-2 bg-surface p-6">
            <p className="text-label">{c.challenge.goalTitle}</p>
            <p className="text-body text-text-secondary">{c.challenge.goal}</p>
          </div>
        </TwoColumn>
      </Band>

      {/* 02 My role */}
      <Band className="pt-0 md:pt-0">
        <TwoColumn caption={c.role.caption} title={c.role.title}>
          <p className="text-body text-text-secondary">{c.role.text}</p>
          <div className="flex flex-wrap gap-2">
            {c.role.badges.map((b) => (
              <Badge key={b}>{b}</Badge>
            ))}
          </div>
        </TwoColumn>
      </Band>

      {/* Process */}
      <Band tone="surface" className="flex flex-col gap-12">
        <SectionHeading wide title={c.process.title} intro={c.process.intro} />
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {c.process.steps.map((s) => (
            <ProcessStep key={s.number} {...s} />
          ))}
        </div>
      </Band>

      {/* 03 What we learned */}
      <Band className="flex flex-col gap-12">
        <TwoColumn caption={c.insights.caption} title={c.insights.title}>
          <p className="text-body text-text-secondary">{c.insights.text}</p>
        </TwoColumn>
        <div className="grid gap-6 md:grid-cols-3">
          {c.insights.cards.map((i) => (
            <ProcessStep key={i.number} {...i} />
          ))}
        </div>
      </Band>

      {/* 04 Key design decisions */}
      <Band tone="surface" className="flex flex-col gap-8 md:gap-12">
        <p className="text-caption text-text-secondary">{c.decisions.caption}</p>
        {c.decisions.items.map((d) => (
          <div key={d.number} className="flex flex-col items-center gap-6 md:gap-8 lg:flex-row lg:gap-16">
            <div className="relative h-[244px] w-full shrink-0 overflow-hidden md:h-[400px] lg:w-[560px]">
              <Image
                src={d.image}
                alt=""
                fill
                sizes="(min-width: 768px) 560px, 100vw"
                className="object-cover"
              />
            </div>
            <div className="flex min-w-0 flex-1 flex-col gap-4">
              <p className="text-caption text-text-secondary">{d.number}</p>
              <h3 className="text-title">{d.title}</h3>
              <p className="text-body text-text-secondary">{d.text}</p>
            </div>
          </div>
        ))}
      </Band>

      {/* Results */}
      <Band className="flex flex-col items-center gap-12">
        <SectionHeading wide title={c.results.title} intro={c.results.intro} />
        <div className="flex w-full flex-col gap-6 md:flex-row">
          {c.results.stats.map((s) => (
            <StatCard key={s.label} {...s} />
          ))}
        </div>
        <ReviewCard
          className="max-w-[784px]"
          text={c.results.quote}
          name={c.results.quoteName}
          role={c.results.quoteRole}
          avatar={null}
          initials={c.results.quoteInitials}
        />
      </Band>

      {/* 05 Looking back */}
      <Band tone="surface">
        <TwoColumn caption={c.lessons.caption} title={c.lessons.title}>
          {c.lessons.items.map((l) => (
            <div key={l.title} className="flex flex-col gap-1">
              <p className="text-label">{l.title}</p>
              <p className="text-body text-text-secondary">{l.text}</p>
            </div>
          ))}
        </TwoColumn>
      </Band>

      {/* More case studies */}
      <Band className="flex flex-col items-center gap-12">
        <SectionHeading
          wide
          title="More case studies"
          intro="Other projects, same care for the people using them."
        />
        <div className="flex w-full flex-col justify-center gap-8 lg:w-auto lg:flex-row lg:gap-6">
          {more.map((p) => (
            <div key={p.slug} className="lg:w-[376px]">
              <ProjectCard
                slug={p.slug}
                title={p.title.split(" ")[0]}
                tags={p.tags}
                image={p.image}
              />
            </div>
          ))}
        </div>
        <Button variant="secondary" href="/projects">
          See all projects
        </Button>
      </Band>
    </>
  );
}
