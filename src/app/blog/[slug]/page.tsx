import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArticleCard } from "@/components/Cards";
import { Badge, Band, MetaItem } from "@/components/CaseStudy";
import { Button } from "@/components/Button";
import { SectionHeading } from "@/components/SectionHeading";
import { blogDetail as d } from "@/lib/blog-detail";
import { articles, primaryDetail } from "@/lib/data";

// The Figma prototype designs one article page and every article card links
// to it, so each article slug renders that template.
export function generateStaticParams() {
  return articles.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({ params }: PageProps<"/blog/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  if (!articles.some((a) => a.slug === slug)) return {};
  return {
    title: d.title,
    description: d.subtitle,
    alternates: { canonical: `/blog/${primaryDetail.article}` },
  };
}

export default async function BlogDetailPage({ params }: PageProps<"/blog/[slug]">) {
  const { slug } = await params;
  if (!articles.some((a) => a.slug === slug)) notFound();

  const keepReading = d.keepReading
    .map((s) => articles.find((a) => a.slug === s))
    .filter((a): a is (typeof articles)[number] => Boolean(a));

  return (
    <>
      {/* Hero */}
      <section className="mx-auto flex w-full max-w-[1176px] flex-col items-start gap-6 px-6 pb-12 pt-6 md:pb-16 md:pt-12 xl:px-0">
        <Link
          href="/blog"
          className="text-label flex min-h-touch w-fit items-center hover:underline hover:underline-offset-8"
        >
          ←&nbsp;&nbsp;All articles
        </Link>
        <Badge>{d.category}</Badge>
        <h1 className="text-h2 max-w-[900px]">{d.title}</h1>
        <p className="text-body-large max-w-[900px] text-text-secondary">{d.subtitle}</p>
        <dl className="flex flex-wrap gap-x-6 gap-y-4">
          {d.meta.map((m) => (
            <MetaItem key={m.label} {...m} className="w-[200px]" />
          ))}
        </dl>
        <div className="relative h-[240px] w-full overflow-hidden md:h-[560px]">
          <Image
            src={d.hero}
            alt=""
            fill
            priority
            sizes="(min-width: 1176px) 1176px, 100vw"
            className="object-cover"
          />
        </div>
      </section>

      {/* Article body */}
      <section className="mx-auto w-full max-w-[1176px] px-6 pb-16 pt-8 md:pb-section xl:px-0">
        <div className="flex flex-col gap-8 lg:flex-row lg:gap-24">
          <nav
            aria-label="In this article"
            className="flex flex-col gap-2 lg:sticky lg:top-6 lg:w-[280px] lg:shrink-0 lg:self-start"
          >
            <p className="text-caption text-text-secondary">In this article</p>
            {d.toc.map((t, i) => (
              <a
                key={t.id}
                href={`#${t.id}`}
                className="text-label flex min-h-touch items-center hover:underline hover:underline-offset-8"
              >
                {String(i + 1).padStart(2, "0")}&nbsp;&nbsp;{t.label}
              </a>
            ))}
          </nav>

          <article className="flex min-w-0 flex-1 flex-col gap-6">
            {d.blocks.map((b, i) => {
              switch (b.type) {
                case "lead":
                  return (
                    <p key={i} className="text-lead">
                      {b.text}
                    </p>
                  );
                case "heading":
                  return (
                    <h2 key={i} id={b.id} className="text-h3 mt-4 scroll-mt-6">
                      {b.text}
                    </h2>
                  );
                case "p":
                  return (
                    <p key={i} className="text-body-large text-text-secondary">
                      {b.text}
                    </p>
                  );
                case "quote":
                  return (
                    <blockquote
                      key={i}
                      className="text-lead border-l-[3px] border-text-primary py-2 pl-6"
                    >
                      {b.text}
                    </blockquote>
                  );
                case "takeaways":
                  return (
                    <div key={i} className="flex flex-col gap-3 bg-surface p-6">
                      <p className="text-label">{b.title}</p>
                      <ol className="flex flex-col gap-3">
                        {b.items.map((it, n) => (
                          <li key={it} className="text-body-large text-text-secondary">
                            {n + 1}.&nbsp;&nbsp;{it}
                          </li>
                        ))}
                      </ol>
                    </div>
                  );
              }
            })}

            <div className="flex flex-col items-start gap-6 border border-surface-subtle p-6 md:flex-row md:items-center">
              <Image
                src={d.author.avatar}
                alt=""
                width={64}
                height={64}
                className="size-16 shrink-0"
              />
              <div className="flex min-w-0 flex-1 flex-col gap-1">
                <p className="text-label">{d.author.name}</p>
                <p className="text-body text-text-secondary">{d.author.bio}</p>
              </div>
              <Button variant="secondary" href="/about">
                More about me
              </Button>
            </div>
          </article>
        </div>
      </section>

      {/* Keep reading */}
      <Band tone="surface" className="flex flex-col items-center gap-12">
        <SectionHeading
          wide
          title="Keep reading"
          intro="More notes on product design, design systems and leading a team."
        />
        <div className="grid w-full gap-8 md:grid-cols-3 md:gap-6">
          {keepReading.map((a) => (
            <ArticleCard key={a.slug} {...a} />
          ))}
        </div>
        <Button variant="secondary" href="/blog">
          Read all articles
        </Button>
      </Band>
    </>
  );
}
