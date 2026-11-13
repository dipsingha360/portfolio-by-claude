"use client";

import { useEffect } from "react";

/**
 * Marks lazy images as loaded so CSS can fade them in instead of popping in.
 * Renders nothing. Images that are already loaded (cached) are marked at once,
 * and a short timeout marks everything as a safety net so nothing stays hidden.
 */
export function ImageFade() {
  useEffect(() => {
    const mark = (img: HTMLImageElement) => img.setAttribute("data-loaded", "");
    const scan = () =>
      document.querySelectorAll<HTMLImageElement>("main img[loading=lazy]").forEach((img) => {
        if (img.complete) mark(img);
      });

    const onLoad = (e: Event) => {
      if (e.target instanceof HTMLImageElement) mark(e.target);
    };
    document.addEventListener("load", onLoad, true);
    document.addEventListener("error", onLoad, true);
    scan();

    const observer = new MutationObserver(scan);
    observer.observe(document.body, { childList: true, subtree: true });
    const safety = window.setInterval(() => {
      document
        .querySelectorAll<HTMLImageElement>("main img[loading=lazy]:not([data-loaded])")
        .forEach((img) => {
          const r = img.getBoundingClientRect();
          // Only force-show images that are near the viewport but still not marked.
          if (r.top < window.innerHeight + 200 && r.bottom > -200 && img.complete) mark(img);
        });
    }, 1500);

    return () => {
      document.removeEventListener("load", onLoad, true);
      document.removeEventListener("error", onLoad, true);
      observer.disconnect();
      window.clearInterval(safety);
    };
  }, []);

  return null;
}
