import { useInView } from "motion/react";
import { useEffect, useMemo, useRef, useState } from "react";

interface SectionBadgeProps {
  /** Two-digit index, e.g. "02". */
  index: string;
  /** Label shown next to the index, e.g. "FEATURES". */
  label: string;
  /** Optional tag/accent color — defaults to the theme-aware brand text token. */
  accent?: string;
}

/**
 * Magazine-style section marker: "§ 02 · FEATURES" with a long horizontal
 * rule. The numeric portion counts up from 00 → target the first time the
 * badge enters the viewport — subtle arrival gesture that rewards scrolling.
 */
export function SectionBadge({ index, label, accent }: SectionBadgeProps) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-20% 0px -20% 0px" });

  const target = Number.parseInt(index, 10);
  const isNumber = Number.isFinite(target);

  const prefersReduce = useMemo(
    () =>
      typeof window !== "undefined" &&
      window.matchMedia?.("(prefers-reduced-motion: reduce)").matches === true,
    [],
  );

  const [display, setDisplay] = useState(() => {
    if (!isNumber) return index;
    if (prefersReduce) return String(target).padStart(2, "0");
    return "00";
  });

  useEffect(() => {
    if (!inView || !isNumber || prefersReduce) return;

    const start = performance.now();
    const duration = 600;
    let raf = 0;

    const tick = (now: number) => {
      const p = Math.min(1, (now - start) / duration);
      const eased = 1 - Math.pow(1 - p, 3);
      const value = Math.round(eased * target);
      setDisplay(String(value).padStart(2, "0"));
      if (p < 1) raf = requestAnimationFrame(tick);
    };

    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, isNumber, prefersReduce, target]);

  return (
    <div ref={ref} className="flex items-center gap-4">
      <div
        className="flex items-center gap-3 font-mono text-xs uppercase tracking-[0.3em]"
        style={accent ? { color: accent } : undefined}
      >
        <span className={accent ? "tabular-nums" : "tabular-nums text-brand-text"}>
          § {display}
        </span>
        <span className="h-px w-8 bg-current opacity-60" />
        <span className="text-text-muted">{label}</span>
      </div>
      <span aria-hidden="true" className="h-px flex-1 bg-border-default" />
    </div>
  );
}
