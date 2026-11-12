import type { Metadata } from "next";
import { ProjectsGrid } from "@/components/ProjectsGrid";
import { SectionHeading } from "@/components/SectionHeading";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Product design, design systems and brand work. Pick a project to see the problem, the process and what changed.",
};

export default function ProjectsPage() {
  return (
    <div className="flex flex-col gap-8 pt-16 md:pt-24">
      <SectionHeading
        wide
        title="Things I’ve designed"
        intro="Product design, design systems and brand work. Pick a project to see the problem, the process and what changed."
      />
      <ProjectsGrid />
    </div>
  );
}
