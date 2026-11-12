import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Button } from "@/components/Button";
import { Band, ProcessRow, ProcessStep } from "@/components/CaseStudy";
import { ContactButton } from "@/components/ContactButton";
import { Faq } from "@/components/Faq";
import { SectionHeading } from "@/components/SectionHeading";
import { services } from "@/lib/data";
import { serviceDetail as d } from "@/lib/service-detail";

// The Figma prototype designs one service detail (Product Design) and every
// service item links to it, so each service slug renders that template.
export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: PageProps<"/services/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  if (!services.some((s) => s.slug === slug)) return {};
  return { title: d.title, description: d.lead };
}

export default async function ServiceDetailPage({ params }: PageProps<"/services/[slug]">) {
  const { slug } = await params;
  if (!services.some((s) => s.slug === slug)) notFound();

  return (
    <>
      {/* Hero */}
      <section className="mx-auto flex w-full max-w-[1176px] flex-col gap-8 px-6 pb-16 pt-6 md:pt-12 xl:px-0">
        <Link
          href="/services"
          className="text-label flex min-h-touch w-fit items-center hover:underline hover:underline-offset-8"
        >
          ←&nbsp;&nbsp;All services
        </Link>
        <div className="flex flex-col gap-8 md:flex-row md:items-end md:gap-16">
          <div className="flex min-w-0 flex-1 flex-col gap-4">
            <p className="text-caption text-text-secondary">{d.eyebrow}</p>
            <h1 className="text-h2">{d.title}</h1>
            <p className="text-lead">{d.lead}</p>
          </div>
          <div className="flex flex-col gap-3 md:w-[296px] md:shrink-0">
            <ContactButton className="w-full">Let’s talk about your product</ContactButton>
            <Button variant="secondary" href="/projects/oneielts" className="w-full">
              Read the OneIELTS case study
            </Button>
          </div>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {d.images.map((src) => (
            <div key={src} className="relative h-[240px] overflow-hidden md:h-[300px]">
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

      {/* Who this is for */}
      <Band tone="surface" className="flex flex-col gap-12">
        <SectionHeading wide title={d.whoFor.title} intro={d.whoFor.intro} />
        <div className="grid gap-6 md:grid-cols-3">
          {d.whoFor.cards.map((c) => (
            <ProcessStep key={c.title} {...c} />
          ))}
        </div>
      </Band>

      {/* What's included */}
      <Band className="flex flex-col gap-12">
        <SectionHeading wide title={d.included.title} intro={d.included.intro} />
        <div className="grid gap-6 md:grid-cols-3">
          {d.included.cards.map((c) => (
            <ProcessStep key={c.number} {...c} />
          ))}
        </div>
      </Band>

      {/* How I work, step by step */}
      <Band tone="surface" className="flex flex-col gap-6">
        <SectionHeading wide title={d.process.title} intro={d.process.intro} />
        <div className="h-6" aria-hidden />
        {d.process.rows.map((r) => (
          <ProcessRow key={r.number} {...r} />
        ))}
      </Band>

      {/* Example project */}
      <Band>
        <div className="flex flex-col items-center gap-8 md:flex-row md:gap-16">
          <div className="relative h-[280px] w-full shrink-0 overflow-hidden md:h-[400px] md:w-[560px]">
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
            <Button href="/projects/oneielts">Read the case study</Button>
          </div>
        </div>
      </Band>

      {/* Ways to work together */}
      <Band tone="surface" className="flex flex-col gap-12">
        <SectionHeading wide title={d.ways.title} intro={d.ways.intro} />
        <div className="grid gap-6 md:grid-cols-3">
          {d.ways.cards.map((c) => (
            <ProcessStep key={c.number} {...c} />
          ))}
        </div>
      </Band>

      {/* FAQ */}
      <Band className="flex flex-col gap-12">
        <SectionHeading title={d.faq.title} intro={d.faq.intro} />
        <Faq items={d.faq.items} />
      </Band>
    </>
  );
}
