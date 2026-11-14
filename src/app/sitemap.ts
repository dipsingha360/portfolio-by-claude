import type { MetadataRoute } from "next";
import { articles, primaryDetail } from "@/lib/data";
import { getSiteUrl } from "@/lib/site-url";

// Lists the pages search engines should index. Every article has its own
// content. Project and service addresses still show one designed detail page
// (see primaryDetail in src/lib/data.ts), so only the main one of each is listed.
export default function sitemap(): MetadataRoute.Sitemap {
  const base = getSiteUrl();
  const url = (path: string) => new URL(path, base).toString();
  const now = new Date();

  return [
    { url: url("/"), lastModified: now, changeFrequency: "monthly", priority: 1 },
    { url: url("/about"), lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: url("/projects"), lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    {
      url: url(`/projects/${primaryDetail.project}`),
      lastModified: now,
      changeFrequency: "yearly",
      priority: 0.7,
    },
    { url: url("/services"), lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    {
      url: url(`/services/${primaryDetail.service}`),
      lastModified: now,
      changeFrequency: "yearly",
      priority: 0.7,
    },
    { url: url("/blog"), lastModified: now, changeFrequency: "weekly", priority: 0.6 },
    ...articles.map((a) => ({
      url: url(`/blog/${a.slug}`),
      lastModified: now,
      changeFrequency: "yearly" as const,
      priority: 0.5,
    })),
  ];
}
