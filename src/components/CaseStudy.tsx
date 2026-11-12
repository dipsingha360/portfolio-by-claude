import type { ReactNode } from "react";

/** Centered 1176px content column used by every case-study band. */
export function Band({
  children,
  tone = "default",
  className = "",
  id,
}: {
  children: ReactNode;
  tone?: "default" | "surface";
  className?: string;
  id?: string;
}) {
  return (
    <section id={id} className={tone === "surface" ? "bg-surface" : "bg-background"}>
      <div className={`mx-auto w-full max-w-[1176px] px-6 py-16 md:py-section xl:px-0 ${className}`}>
        {children}
      </div>
    </section>
  );
}

/** Figma: "Two column" — caption + title on the left (376px), copy on the right. */
export function TwoColumn({
  caption,
  title,
  children,
}: {
  caption: string;
  title: string;
  children: ReactNode;
}) {
  return (
    <div className="flex flex-col gap-8 md:flex-row md:gap-12">
      <div className="flex flex-col gap-4 md:w-[376px] md:shrink-0">
        <p className="text-caption text-text-secondary">{caption}</p>
        <h2 className="text-title">{title}</h2>
      </div>
      <div className="flex min-w-0 flex-1 flex-col gap-4">{children}</div>
    </div>
  );
}

/** Figma: Molecules / Meta item. */
export function MetaItem({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex min-w-0 flex-1 flex-col gap-1">
      <dt className="text-caption text-text-secondary">{label}</dt>
      <dd className="text-label">{value}</dd>
    </div>
  );
}

/** Figma: Molecules / Stat card. */
export function StatCard({ value, label }: { value: string; label: string }) {
  return (
    <div className="flex min-w-0 flex-1 flex-col gap-2 border border-surface-subtle bg-background p-6">
      <p className="text-h2">{value}</p>
      <p className="text-body text-text-secondary">{label}</p>
    </div>
  );
}

/** Figma: Molecules / Process step (also used for the insight cards). */
export function ProcessStep({
  number,
  title,
  description,
}: {
  number: string;
  title: string;
  description: string;
}) {
  return (
    <div className="flex min-w-0 flex-1 flex-col gap-3 border border-surface-subtle bg-background p-6">
      <p className="text-caption text-text-secondary">{number}</p>
      <h3 className="text-h3">{title}</h3>
      <p className="text-body text-text-secondary">{description}</p>
    </div>
  );
}

/** Figma: Atoms / Badge (static label). */
export function Badge({ children }: { children: ReactNode }) {
  return (
    <span className="text-caption rounded-full border border-surface-subtle bg-surface px-3 py-2">
      {children}
    </span>
  );
}
