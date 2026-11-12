"use client";

import { useState } from "react";
import { ProjectCard } from "./Cards";
import { projectFilters, projects, type ProjectFilter } from "@/lib/data";

/** Figma: Atoms / Filter chip (selected = aria-pressed) + Project grid. */
export function ProjectsGrid() {
  const [active, setActive] = useState<ProjectFilter>("All");
  const visible =
    active === "All" ? projects : projects.filter((p) => p.categories.includes(active));

  return (
    <>
      <div
        role="group"
        aria-label="Filter projects"
        className="flex flex-wrap justify-start gap-2 px-6 md:justify-center md:px-0"
      >
        {projectFilters.map((f) => {
          const selected = f === active;
          return (
            <button
              key={f}
              type="button"
              aria-pressed={selected}
              onClick={() => setActive(f)}
              className={`text-caption flex h-9 cursor-pointer items-center justify-center whitespace-nowrap rounded-full px-4 transition-colors ${
                selected
                  ? "bg-action-primary text-text-inverse"
                  : "bg-surface text-text-primary hover:bg-surface-subtle"
              }`}
            >
              {f}
            </button>
          );
        })}
      </div>

      <div className="mx-auto grid w-full max-w-[1176px] grid-cols-1 gap-x-6 gap-y-8 px-6 pb-16 pt-12 md:grid-cols-3 md:gap-y-14 md:px-0 md:pb-24">
        {visible.map((p) => (
          <ProjectCard key={p.slug} {...p} />
        ))}
      </div>
    </>
  );
}
