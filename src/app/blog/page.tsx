import type { Metadata } from "next";
import { BlogList } from "@/components/BlogList";
import { SectionHeading } from "@/components/SectionHeading";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Short reads on product design, design systems and leading a design team, written from real work.",
};

export default function BlogPage() {
  return (
    <div className="flex flex-col gap-8 pt-16 md:pt-24">
      <SectionHeading
        wide
        page
        title="Notes from my desk"
        intro="Short reads on product design, design systems and leading a design team, written from real work."
      />
      <BlogList />
    </div>
  );
}
