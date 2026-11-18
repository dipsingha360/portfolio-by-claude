import { Button } from "./Button";
import { ProcessStep } from "./CaseStudy";
import { SectionHeading } from "./SectionHeading";
import { processSummary } from "@/lib/how-i-work";

/** Figma: Home, "How I work" section (5:1257). Four process steps; the cards are not links. */
export function HowIWorkSection() {
  return (
    <>
      <SectionHeading title={processSummary.title} intro={processSummary.intro} />
      <div className="grid w-full items-stretch gap-6 md:grid-cols-2 lg:grid-cols-4">
        {processSummary.steps.map((s) => (
          <ProcessStep key={s.number} {...s} />
        ))}
      </div>
      <Button variant="secondary" href="/how-i-work">
        See my full process
      </Button>
    </>
  );
}
