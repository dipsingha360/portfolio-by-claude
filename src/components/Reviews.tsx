import Image from "next/image";

/** Figma: Molecules / Review card. Use real reviews only. */
export function ReviewCard({
  text,
  name,
  role,
  avatar,
  initials,
  className = "lg:w-[384px]",
}: {
  text: string;
  name: string;
  role: string;
  avatar: string | null;
  initials: string;
  className?: string;
}) {
  return (
    <figure className={`flex w-full flex-col gap-5 border border-surface-subtle bg-background p-6 ${className}`}>
      <span aria-hidden className="text-h3 text-text-secondary">
        “
      </span>
      <blockquote className="text-lead">{text}</blockquote>
      <figcaption className="flex items-center gap-3">
        <div className="relative size-10 shrink-0 overflow-hidden rounded-full bg-surface-subtle">
          {avatar ? (
            <Image src={avatar} alt="" fill sizes="40px" className="object-cover" />
          ) : (
            <span className="text-caption absolute left-2 top-2.5">{initials}</span>
          )}
        </div>
        <div className="flex min-w-0 flex-col gap-1">
          <span className="text-label">{name}</span>
          <span className="text-caption text-text-secondary">{role}</span>
        </div>
      </figcaption>
    </figure>
  );
}

/** Figma: Molecules / Video testimonial. Use real videos only. */
export function VideoTestimonial({ image, label }: { image: string; label: string }) {
  return (
    <button
      type="button"
      aria-label={label}
      className="group relative h-[420px] w-full cursor-pointer overflow-hidden lg:w-[384px]"
    >
      <Image
        src={image}
        alt=""
        fill
        sizes="(min-width: 1024px) 384px, 100vw"
        className="object-cover transition-[filter] group-hover:brightness-90"
      />
      <Image
        src="/images/icons/play-button.svg"
        alt=""
        width={64}
        height={64}
        className="absolute left-1/2 top-1/2 size-16 -translate-x-1/2 -translate-y-1/2"
      />
    </button>
  );
}
