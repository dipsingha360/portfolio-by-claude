/** Figma: Molecules / Section heading (centered h2 + intro). `wide` is the 1280px variant. */
export function SectionHeading({
  title,
  intro,
  wide = false,
  page = false,
}: {
  title: string;
  intro: string;
  wide?: boolean;
  /** The main heading of the whole page (renders an h1 instead of an h2). */
  page?: boolean;
}) {
  const Heading = page ? "h1" : "h2";
  return (
    <div
      className={`mx-auto flex w-full flex-col items-center gap-4 px-6 text-center ${
        wide ? "max-w-[1280px]" : "max-w-[640px]"
      }`}
    >
      <Heading className="text-h2">{title}</Heading>
      <p className="text-body max-w-[640px]">{intro}</p>
    </div>
  );
}
