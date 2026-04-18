import type { SVGProps } from "react";

export interface MarkProps extends SVGProps<SVGSVGElement> {
  /** Body fill (anteater). Defaults to white. */
  bodyFill?: string;
  /** Detail stroke/fill (eye, ear inner, stripes). Defaults to bitcoin-orange. */
  accentFill?: string;
}

export function Mark({
  bodyFill = "#ffffff",
  accentFill = "#F7931A",
  ...props
}: MarkProps) {
  // Decorative by default. Current usage pairs the Mark with adjacent text
  // (Wordmark in nav/hero/footer). Callers that need the Mark to carry its
  // own accessible name pass `aria-label` or `aria-labelledby` explicitly —
  // we skip the aria-hidden fallback then.
  const hasAccessibleName =
    props["aria-label"] != null || props["aria-labelledby"] != null;

  return (
    <svg
      viewBox="0 0 200 200"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden={hasAccessibleName ? undefined : true}
      {...props}
    >
      <ellipse cx="100" cy="120" rx="50" ry="35" fill={bodyFill} />
      <ellipse cx="60" cy="105" rx="22" ry="18" fill={bodyFill} />
      <path
        d="M38 105 Q20 100 8 95 Q6 94 8 93 Q22 90 40 98"
        fill={bodyFill}
      />
      <circle cx="55" cy="100" r="3" fill={accentFill} />
      <ellipse cx="68" cy="88" rx="8" ry="12" fill={bodyFill} />
      <ellipse cx="68" cy="90" rx="5" ry="8" fill={accentFill} />
      <path
        d="M150 115 Q170 90 165 60 Q164 55 167 58 Q178 75 160 115"
        fill={bodyFill}
      />
      <rect x="75" y="145" width="10" height="25" rx="4" fill={bodyFill} />
      <rect x="95" y="145" width="10" height="25" rx="4" fill={bodyFill} />
      <rect x="115" y="145" width="10" height="25" rx="4" fill={bodyFill} />
      <rect x="130" y="142" width="10" height="25" rx="4" fill={bodyFill} />
      <path
        d="M80 108 Q100 100 120 108"
        stroke={accentFill}
        strokeWidth="3"
        fill="none"
        opacity="0.4"
      />
      <path
        d="M75 118 Q100 110 125 118"
        stroke={accentFill}
        strokeWidth="3"
        fill="none"
        opacity="0.3"
      />
      <path
        d="M78 128 Q100 120 122 128"
        stroke={accentFill}
        strokeWidth="3"
        fill="none"
        opacity="0.2"
      />
    </svg>
  );
}
