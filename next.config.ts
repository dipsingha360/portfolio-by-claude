import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  cacheComponents: true,
  partialPrefetching: true,
  async redirects() {
    // "Services" was replaced by "How I work"; keep old links and search results working.
    return [
      { source: "/services", destination: "/how-i-work", permanent: true },
      { source: "/services/:slug*", destination: "/how-i-work", permanent: true },
    ];
  },
  async headers() {
    return [
      {
        // The resume opens in the browser's PDF viewer and keeps a clean file name when saved.
        source: "/resume.pdf",
        headers: [
          { key: "Content-Type", value: "application/pdf" },
          {
            key: "Content-Disposition",
            value: 'inline; filename="Dip-Singha-Product-Designer-Resume.pdf"',
          },
          { key: "Cache-Control", value: "public, max-age=3600" },
        ],
      },
    ];
  },
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
};

export default nextConfig;
