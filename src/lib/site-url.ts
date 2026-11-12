/**
 * The public address of the site, used for absolute links in metadata,
 * the sitemap and share images.
 *
 * Order: SITE_URL (set this to your custom domain), then Vercel's production
 * address, then the current Vercel deployment, then localhost for development.
 */
export function getSiteUrl(): URL {
  const explicit = process.env.SITE_URL?.trim();
  const vercelProduction = process.env.VERCEL_PROJECT_PRODUCTION_URL?.trim();
  const vercelDeployment = process.env.VERCEL_URL?.trim();

  const raw =
    explicit ||
    (vercelProduction && `https://${vercelProduction}`) ||
    (vercelDeployment && `https://${vercelDeployment}`) ||
    "http://localhost:3000";

  try {
    return new URL(/^https?:\/\//.test(raw) ? raw : `https://${raw}`);
  } catch {
    return new URL("http://localhost:3000");
  }
}
