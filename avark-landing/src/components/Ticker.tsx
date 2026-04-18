import { Mark } from "../assets/brand";

const DEFAULT_ITEMS = [
  "Bitcoin without the waiting",
  "Built on Arkade",
  "Self-custody by default",
  "Lightning-fast settlement",
  "21,000,000 sats forever",
  "Your keys. Your rules.",
] as const;

interface TickerProps {
  items?: readonly string[];
  /** Visual variant — dark strip with brand text, or brand strip with surface text. */
  variant?: "invert" | "brand";
}

export function Ticker({ items = DEFAULT_ITEMS, variant = "brand" }: TickerProps) {
  const classes =
    variant === "brand"
      ? "bg-brand-500 text-white"
      : "bg-[#0a0a0a] text-brand-400 dark:bg-[#0a0a0a] dark:text-brand-400";

  // Render the list twice so the animation loops with no visible seam.
  const loop = [...items, ...items];

  return (
    <div
      className={`relative overflow-hidden border-y border-black/20 ${classes}`}
      aria-hidden="true"
    >
      <div className="marquee-track flex whitespace-nowrap py-3 will-change-transform">
        {loop.map((text, i) => (
          <span
            key={`${text}-${i}`}
            className="flex shrink-0 items-center gap-6 pr-6 font-mono text-xs uppercase tracking-[0.3em]"
          >
            <Mark
              className="h-4 w-4 shrink-0"
              bodyFill="currentColor"
              accentFill="rgba(255,255,255,0.35)"
            />
            <span>{text}</span>
          </span>
        ))}
      </div>
    </div>
  );
}
