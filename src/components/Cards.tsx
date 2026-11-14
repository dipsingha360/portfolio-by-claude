import Image from "next/image";
import Link from "next/link";

/** Figma: Molecules / Project card. */
export function ProjectCard({
  level = 3,
  slug,
  title,
  tags,
  image,
}: {
  /** Heading level of the title: 2 on list pages, 3 inside a section. */
  level?: 2 | 3;
  slug: string;
  title: string;
  tags: string;
  image: string;
}) {
  const Heading = level === 2 ? "h2" : "h3";
  return (
    <Link
      href={`/projects/${slug}`}
      className="group flex min-w-0 flex-1 flex-col gap-4"
    >
      <div className="relative h-[240px] w-full overflow-hidden md:h-[320px]">
        <Image
          src={image}
          alt=""
          fill
          sizes="(min-width: 1024px) 384px, 100vw"
          className="object-cover transition-[filter] group-hover:brightness-90"
        />
      </div>
      <div className="flex flex-col gap-2">
        <Heading className="text-h3">{title}</Heading>
        <p className="text-caption text-text-secondary">{tags}</p>
        <span className="text-label transition-opacity md:opacity-0 md:group-hover:opacity-100 md:group-focus-visible:opacity-100">
          View case study &nbsp;→
        </span>
      </div>
    </Link>
  );
}

/** Figma: Molecules / Service item. */
export function ServiceItem({
  level = 3,
  index,
  slug,
  title,
  summary,
  image,
}: {
  /** Heading level of the title: 2 on list pages, 3 inside a section. */
  level?: 2 | 3;
  index: number;
  slug: string;
  title: string;
  summary: string;
  image: string;
}) {
  const Heading = level === 2 ? "h2" : "h3";
  return (
    <Link
      href={`/services/${slug}`}
      className="group flex flex-col gap-4 border border-surface-subtle bg-background p-6 transition-colors hover:bg-surface md:flex-row md:gap-6"
    >
      <div className="flex min-w-0 flex-1 flex-col gap-3">
        <span className="text-caption">{String(index + 1).padStart(2, "0")}</span>
        <Heading className="text-h3">{title}</Heading>
        <p className="text-body text-text-secondary">{summary}</p>
        <span className="text-label opacity-0 transition-opacity group-hover:opacity-100 group-focus-visible:opacity-100">
          View service &nbsp;→
        </span>
      </div>
      <div className="relative h-[120px] min-w-0 shrink-0 overflow-hidden md:flex-1 md:self-start">
        <Image
          src={image}
          alt=""
          fill
          sizes="(min-width: 1024px) 604px, 100vw"
          className="object-cover"
        />
      </div>
    </Link>
  );
}

/** Figma: Molecules / Article card. */
export function ArticleCard({
  level = 3,
  slug,
  date,
  readTime,
  title,
  summary,
  image,
}: {
  /** Heading level of the title: 2 on list pages, 3 inside a section. */
  level?: 2 | 3;
  slug: string;
  date: string;
  readTime: string;
  title: string;
  summary: string;
  image: string;
}) {
  const Heading = level === 2 ? "h2" : "h3";
  return (
    <Link href={`/blog/${slug}`} className="group flex min-w-0 flex-1 flex-col gap-4">
      <div className="relative h-[240px] w-full overflow-hidden">
        <Image
          src={image}
          alt=""
          fill
          sizes="(min-width: 1024px) 384px, 100vw"
          className="object-cover transition-[filter] group-hover:brightness-90"
        />
      </div>
      <div className="flex flex-col gap-2">
        <p className="text-caption whitespace-pre text-text-secondary">
          {date} &nbsp;·&nbsp; {readTime}
        </p>
        <Heading className="text-h3">{title}</Heading>
        <p className="text-body text-text-secondary">{summary}</p>
        <span className="text-label opacity-0 transition-opacity group-hover:opacity-100 group-focus-visible:opacity-100">
          Read article &nbsp;→
        </span>
      </div>
    </Link>
  );
}
