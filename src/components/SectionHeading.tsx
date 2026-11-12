/** Figma: Molecules / Section heading (centered h2 + intro). `wide` is the 1280px variant. */
export function SectionHeading({
  title,
  intro,
  wide = false,
}: {
  title: string;
  intro: string;
  wide?: boolean;
}) {
  return (
    <div
      className={`mx-auto flex w-full flex-col items-center gap-4 px-6 text-center ${
        wide ? "max-w-[1280px]" : "max-w-[640px]"
      }`}
    >
      <h2 className="text-h2">{title}</h2>
      <p className="text-body max-w-[640px]">{intro}</p>
    </div>
  );
}
