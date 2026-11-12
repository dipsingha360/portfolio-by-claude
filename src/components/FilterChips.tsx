"use client";

/** Figma: Atoms / Filter chip. Selected = aria-pressed. Shared by Projects and Blog. */
export function FilterChips<T extends string>({
  filters,
  active,
  onChange,
  label,
}: {
  filters: readonly T[];
  active: T;
  onChange: (f: T) => void;
  label: string;
}) {
  return (
    <div
      role="group"
      aria-label={label}
      className="flex flex-wrap justify-start gap-2 px-6 md:justify-center md:px-0"
    >
      {filters.map((f) => {
        const selected = f === active;
        return (
          <button
            key={f}
            type="button"
            aria-pressed={selected}
            onClick={() => onChange(f)}
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
  );
}
