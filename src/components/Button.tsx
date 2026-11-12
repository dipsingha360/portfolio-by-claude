import Link from "next/link";
import type { ButtonHTMLAttributes, ReactNode } from "react";

type Props = {
  variant?: "primary" | "secondary";
  /** Horizontal padding: Figma uses 20px normally and 32px for the hero primary. */
  wide?: boolean;
  href?: string;
  children: ReactNode;
  className?: string;
} & Omit<ButtonHTMLAttributes<HTMLButtonElement>, "className" | "children">;

/** Figma: Atoms / Button (48px touch target, 4px radius). */
export function Button({
  variant = "primary",
  wide,
  href,
  children,
  className = "",
  ...rest
}: Props) {
  const base =
    "inline-flex h-12 min-h-12 shrink-0 cursor-pointer items-center justify-center whitespace-nowrap rounded-control py-3 text-label transition-opacity hover:opacity-85";
  const look =
    variant === "primary"
      ? "bg-action-primary text-text-inverse"
      : "border border-border-control bg-background text-text-primary";
  const pad = wide ? "px-8" : "px-5";
  const cls = `${base} ${look} ${pad} ${className}`;

  if (href) {
    return (
      <Link href={href} className={cls} onClick={rest.onClick as never}>
        {children}
      </Link>
    );
  }
  return (
    <button type="button" className={cls} {...rest}>
      {children}
    </button>
  );
}
