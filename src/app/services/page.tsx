import type { Metadata } from "next";
import { Badge, Band, ProcessStep } from "@/components/CaseStudy";
import { ServiceItem } from "@/components/Cards";
import { Faq } from "@/components/Faq";
import { SectionHeading } from "@/components/SectionHeading";
import { faqs, services } from "@/lib/data";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Whether you need a designer on your team or a hand with one project, here’s what I bring and what you get.",
};

const steps = [
  {
    number: "01",
    title: "Understand",
    description:
      "We talk about your goals, your users and what success looks like. I ask a lot of questions here.",
  },
  {
    number: "02",
    title: "Explore",
    description:
      "I map flows and sketch ideas fast, so we agree on a direction before polishing anything.",
  },
  {
    number: "03",
    title: "Design and test",
    description:
      "I turn that direction into clean, real screens and test them with users or your team.",
  },
  {
    number: "04",
    title: "Hand off and support",
    description:
      "You get an organized Figma file for your developers, and I stay around while it gets built.",
  },
];

export default function ServicesPage() {
  return (
    <>
      <div className="pb-8 pt-16 md:pb-12 md:pt-24">
        <SectionHeading
          wide
          page
        title="What I can do for you"
          intro="Whether you need a designer on your team or a hand with one project, here’s what I bring and what you get."
        />
      </div>

      <div className="mx-auto flex w-full max-w-[1176px] flex-col gap-6 px-6 pb-16 md:pb-24 xl:px-0">
        {services.map((s, i) => (
          <div key={s.slug} className="flex flex-col gap-4">
            <ServiceItem index={i} level={2} {...s} />
            <div className="flex flex-wrap items-center gap-2 md:pl-6">
              <p className="text-label">What you get:</p>
              {s.get.map((g) => (
                <Badge key={g}>{g}</Badge>
              ))}
            </div>
          </div>
        ))}
      </div>

      <Band tone="surface" className="flex flex-col gap-12">
        <SectionHeading
          wide
          title="How I work"
          intro="A simple process that keeps you in the loop, from our first call to launch day."
        />
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {steps.map((s) => (
            <ProcessStep key={s.number} {...s} />
          ))}
        </div>
      </Band>

      <Band className="flex flex-col gap-12">
        <SectionHeading
          title="Questions I get asked"
          intro="Quick answers about how I work. Can’t find yours? Just send me a message."
        />
        <Faq items={faqs} />
      </Band>
    </>
  );
}
