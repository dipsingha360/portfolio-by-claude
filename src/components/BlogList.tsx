"use client";

import Image from "next/image";
import { useState } from "react";
import { Button } from "./Button";
import { ArticleCard } from "./Cards";
import { Badge } from "./CaseStudy";
import { FilterChips } from "./FilterChips";
import { articles, blogFilters, type BlogFilter } from "@/lib/data";

/** Filter chips, featured article (All only), article grid and "Load more". */
export function BlogList() {
  const [active, setActive] = useState<BlogFilter>("All");
  const [caughtUp, setCaughtUp] = useState(false);

  const featured = articles[0];
  const showFeatured = active === "All";
  const visible =
    active === "All"
      ? articles.filter((a) => a.slug !== featured.slug)
      : articles.filter((a) => a.category === active);

  return (
    <>
      <FilterChips
        filters={blogFilters}
        active={active}
        onChange={setActive}
        label="Filter articles"
      />

      {showFeatured && (
        <div className="mx-auto w-full max-w-[1176px] px-6 pt-4 xl:px-0">
          <div className="flex flex-col items-center gap-8 border border-surface-subtle bg-background p-6 md:flex-row md:gap-12">
            <div className="relative h-[240px] w-full shrink-0 overflow-hidden md:h-[360px] md:w-[560px]">
              <Image
                src="/images/blog/featured.png"
                alt=""
                fill
                sizes="(min-width: 768px) 560px, 100vw"
                className="object-cover"
              />
            </div>
            <div className="flex min-w-0 flex-1 flex-col items-start gap-4">
              <Badge tone="primary">Featured</Badge>
              <p className="text-caption whitespace-pre text-text-secondary">
                {featured.date} &nbsp;·&nbsp; {featured.readTime}
              </p>
              <h2 className="text-title">{featured.title}</h2>
              <p className="text-body text-text-secondary">{featured.summary}</p>
              <Button href={`/blog/${featured.slug}`}>Read article</Button>
            </div>
          </div>
        </div>
      )}

      <div className="mx-auto grid w-full max-w-[1176px] grid-cols-1 gap-x-6 gap-y-10 px-6 pb-8 pt-12 md:grid-cols-3 md:gap-y-14 xl:px-0">
        {visible.map((a) => (
          <ArticleCard key={a.slug} {...a} />
        ))}
      </div>

      {showFeatured && (
        <div className="flex justify-center pb-16 md:pb-24">
          <Button
            variant="secondary"
            disabled={caughtUp}
            onClick={() => setCaughtUp(true)}
          >
            {caughtUp ? "You’re all caught up" : "Load more articles"}
          </Button>
        </div>
      )}
    </>
  );
}
