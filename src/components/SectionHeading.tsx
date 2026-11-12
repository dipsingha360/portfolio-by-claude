/** Figma: Molecules / Section heading (centered h2 + intro). */
export function SectionHeading({
  title,
  intro,
}: {
  title: string;
  intro: string;
}) {
  return (
    <div className="mx-auto flex w-full max-w-[640px] flex-col items-center gap-4 px-6 text-center">
      <h2 className="text-h2">{title}</h2>
      <p className="text-body max-w-[640px]">{intro}</p>
    </div>
  );
}
