import Image from "next/image";
import Link from "next/link";
import { site } from "@/lib/data";

/** Figma: Logoo. A black rounded square with the white "P" mark, then the name. */
export function Logo({ onNavigate }: { onNavigate?: () => void }) {
  return (
    <Link
      href="/"
      aria-label={`${site.name}, home`}
      onClick={onNavigate}
      className="flex shrink-0 items-center gap-2"
    >
      <span className="relative size-8 shrink-0 overflow-hidden rounded-lg bg-action-primary">
        <span className="absolute inset-x-[16.67%] inset-y-[27.08%]">
          <Image src="/images/logo-mark.svg" alt="" width={22} height={15} className="block size-full" />
        </span>
      </span>
      <span className="text-label whitespace-nowrap">{site.name}</span>
    </Link>
  );
}
