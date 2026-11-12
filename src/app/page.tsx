import type { Metadata } from "next";
import Image from "next/image";
import { Button } from "@/components/Button";
import { SectionHeading } from "@/components/SectionHeading";
import { ArticleCard, ProjectCard, ServiceItem } from "@/components/Cards";
import { ReviewCard, VideoTestimonial } from "@/components/Reviews";
import { Faq } from "@/components/Faq";
import { articles, faqs, projects, reviews, services } from "@/lib/data";
import { bandPadding, container } from "@/lib/layout";

export const metadata: Metadata = {
  description:
    "Dip Singha is a product designer based in Bangladesh, working worldwide. 3 years in product design, a background in graphic design, leading a team of 4 designers.",
};

// The hero and every section share the same band padding and centered
// content column (see src/lib/layout.ts), so their edges always line up.
function Section({ children }: { children: React.ReactNode }) {
  return (
    <section className={`py-16 md:py-section ${bandPadding}`}>
      <div className={`${container} flex flex-col items-center gap-8 md:gap-12`}>{children}</div>
    </section>
  );
}

export default function Home() {
  return (
    <>
      {/* Hero. On mobile (Figma): text, portrait, then full-width buttons.
          From xl: text and buttons stack on the left, portrait on the right. */}
      <section className={`py-12 md:py-16 ${bandPadding}`}>
        <div className={`${container} flex flex-col items-start justify-between gap-8 xl:flex-row xl:items-center xl:gap-12`}>
          <div className="contents xl:flex xl:w-[560px] xl:flex-col xl:gap-6">
            <div className="order-1 flex w-full flex-col gap-4 xl:gap-6">
              <h1 className="text-display">Dip Singha</h1>
              <hr className="h-px w-full border-0 bg-surface-subtle" />
              <div className="text-body flex flex-col gap-2 sm:flex-row sm:gap-8">
                <p>Product Designer</p>
                <p>Based in Bangladesh, working worldwide</p>
              </div>
              <p className="text-lead">
                I turn messy problems into simple &amp; user friendly products. 3 years in product
                design, a background in graphic design, and now leading a team of 4 designers.
              </p>
            </div>
            <div className="order-3 flex w-full flex-col gap-3 sm:flex-row sm:flex-wrap">
              <Button wide href="/resume.pdf" className="w-full sm:w-auto">
                Download resume
              </Button>
              <Button variant="secondary" href="/projects" className="w-full sm:w-auto">
                View my projects
              </Button>
            </div>
          </div>
          <div className="relative order-2 aspect-[342/320] w-full shrink-0 overflow-hidden sm:max-w-[560px] xl:aspect-square">
            <Image
              src="/images/home/portrait.png"
              alt="Portrait of Dip Singha"
              fill
              priority
              sizes="(min-width: 1280px) 560px, 100vw"
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* Selected projects */}
      <Section>
        <SectionHeading
          title="Selected projects"
          intro="A few projects I’m proud of, from mobile apps to design systems and brand work. Each one shows how I think, not just how it looks."
        />
        <div className="flex w-full flex-col gap-6 md:flex-row">
          {projects.slice(0, 3).map((p) => (
            <ProjectCard key={p.slug} {...p} />
          ))}
        </div>
        <Button variant="secondary" href="/projects">
          See all projects
        </Button>
      </Section>

      {/* Services */}
      <Section>
        <SectionHeading
          title="How I can help"
          intro="Whether you’re hiring for your team or need a hand on a project, here’s where I add the most value."
        />
        <div className="flex w-full flex-col gap-4 md:gap-6">
          {services.map((s, i) => (
            <ServiceItem key={s.slug} index={i} {...s} />
          ))}
        </div>
        <Button variant="secondary" href="/services">
          View all services
        </Button>
      </Section>

      {/* Client reviews */}
      <Section>
        <SectionHeading
          title="Kind words"
          intro="What clients and teammates say about working with me."
        />
        <div className="flex w-full flex-col items-center gap-6 lg:gap-8">
          {reviews.rows.map((r, i) => (
            <div
              key={i}
              className={`contents lg:flex lg:w-full lg:flex-row lg:items-center lg:justify-center lg:gap-8 ${
                i % 2 === 1 ? "lg:flex-row-reverse" : ""
              }`}
            >
              <ReviewCard {...r} />
              <VideoTestimonial image={r.video} label="Play video testimonial" />
            </div>
          ))}
        </div>
      </Section>

      {/* FAQ */}
      <Section>
        <SectionHeading
          title="Questions I get asked"
          intro="Quick answers about how I work. Can’t find yours? Just send me a message."
        />
        <Faq items={faqs} />
      </Section>

      {/* Blog */}
      <Section>
        <SectionHeading
          title="Things I’ve learned"
          intro="Short reads on product design, design systems and leading a design team."
        />
        <div className="flex w-full flex-col gap-6 md:flex-row">
          {articles.slice(0, 3).map((a) => (
            <ArticleCard key={a.slug} {...a} />
          ))}
        </div>
        <Button variant="secondary" href="/blog">
          Read all articles
        </Button>
      </Section>
    </>
  );
}
