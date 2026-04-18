import type { HTMLAttributes } from "react";

export interface WordmarkProps extends HTMLAttributes<HTMLSpanElement> {
  /** Tailwind sizing class, e.g. "text-2xl" or "text-7xl". Defaults to "text-3xl". */
  size?: string;
}

export function Wordmark({
  size = "text-3xl",
  className = "",
  ...props
}: WordmarkProps) {
  return (
    <span
      className={`font-display tracking-wider leading-none ${size} ${className}`}
      {...props}
    >
      Avark
    </span>
  );
}
