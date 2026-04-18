import type { SVGProps } from "react";

const base: SVGProps<SVGSVGElement> = {
  viewBox: "0 0 64 64",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.5,
  strokeLinecap: "round",
  strokeLinejoin: "round",
  "aria-hidden": true,
  focusable: false,
};

/** Step 1 — Create wallet: shield + sparkle */
export function CreateIllustration(props: SVGProps<SVGSVGElement>) {
  return (
    <svg {...base} {...props}>
      <path d="M32 8 L50 16 V32 C50 43 42 52 32 56 C22 52 14 43 14 32 V16 Z" />
      <path d="M32 24 V40 M24 32 H40" strokeWidth="2" />
      <circle cx="46" cy="16" r="2.2" fill="currentColor" />
      <path d="M46 10 V14 M46 18 V22 M42 16 H45 M47 16 H50" />
    </svg>
  );
}

/** Step 2 — Receive: wallet + downward arrow */
export function ReceiveIllustration(props: SVGProps<SVGSVGElement>) {
  return (
    <svg {...base} {...props}>
      <rect x="10" y="30" width="44" height="26" rx="3" />
      <path d="M10 38 H54" />
      <circle cx="44" cy="47" r="2" fill="currentColor" />
      <path d="M32 6 V24" strokeWidth="2" />
      <path d="M24 18 L32 26 L40 18" strokeWidth="2" />
    </svg>
  );
}

/** Step 3 — Spend: lightning bolt on a card */
export function SpendIllustration(props: SVGProps<SVGSVGElement>) {
  return (
    <svg {...base} {...props}>
      <rect x="8" y="12" width="48" height="30" rx="3" />
      <path d="M8 22 H56" />
      <path
        d="M34 48 L26 58 H32 L30 64 L38 54 H32 Z"
        fill="currentColor"
        stroke="none"
      />
      <path d="M30 28 L26 34 H30 L28 40 L34 32 H30 Z" fill="currentColor" strokeWidth="0.5" />
    </svg>
  );
}

/** Step 4 — Renew: circular arrows */
export function RenewIllustration(props: SVGProps<SVGSVGElement>) {
  return (
    <svg {...base} {...props}>
      <path d="M52 20 A20 20 0 1 0 54 34" />
      <path d="M56 10 V22 H44" />
      <circle cx="32" cy="34" r="3" fill="currentColor" />
    </svg>
  );
}
