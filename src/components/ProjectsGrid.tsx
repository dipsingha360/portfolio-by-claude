"use client";

import { useState } from "react";
import { ProjectCard } from "./Cards";
import { FilterChips } from "./FilterChips";
import { projectFilters, projects, type ProjectFilter } from "@/lib/data";

/** Filter chips + Project grid. */
export function ProjectsGrid() {
  const [active, setActive] = useState<ProjectFilter>("All");
  const visible =
    active === "All" ? projects : projects.filter((p) => p.categories.includes(active));

  return (
    <>
      <FilterChips
        filters={projectFilters}
        active={active}
        onChange={setActive}
        label="Filter projects"
      />
      <div className="mx-auto grid w-full max-w-[1176px] grid-cols-1 gap-x-6 gap-y-8 px-6 pb-16 pt-12 md:grid-cols-3 md:gap-y-14 md:px-0 md:pb-24">
        {visible.map((p) => (
          <ProjectCard key={p.slug} level={2} {...p} />
        ))}
      </div>
    </>
  );
}
