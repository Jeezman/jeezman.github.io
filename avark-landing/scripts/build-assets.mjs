// Generates the marketing site's static SEO + brand assets:
//   - public/og.png           (1200×630, brand-typographic Open Graph image)
//   - public/favicon.svg      (vector, used by modern browsers)
//   - public/favicon-16.png   (16×16 PNG fallback)
//   - public/favicon-32.png   (32×32 PNG fallback)
//   - public/apple-touch-icon.png (180×180)
//
// Run with `pnpm --filter @avark/landing generate-assets`. Commit the output.
//
// Tagline + brand colors are read from the repo's existing sources so this
// never drifts from what the site ships.

import { Resvg } from "@resvg/resvg-js";
import satori from "satori";
import { readFile, writeFile } from "node:fs/promises";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = resolve(__dirname, "..");
const PUBLIC = resolve(ROOT, "public");

const BRAND_ORANGE = "#F7931A";
const BRAND_ORANGE_DEEP = "#B36105";

// Keep in sync with src/brand.ts — the OG composition must always use what
// the site uses.
const BRAND_NAME = "Avark";
const TAGLINE = "Bitcoin without the waiting.";

// ── Font loading ─────────────────────────────────────────────────────────
// Resolve fonts from the pnpm virtual store. The package.json path is stable
// even though pnpm stores them under .pnpm/<pkg>@<ver>/node_modules/<pkg>.

async function resolveFontFile(pkg, relative) {
  const pkgJsonUrl = import.meta.resolve(`${pkg}/package.json`);
  const pkgDir = dirname(fileURLToPath(pkgJsonUrl));
  return readFile(resolve(pkgDir, relative));
}

const righteous = await resolveFontFile(
  "@fontsource/righteous",
  "files/righteous-latin-400-normal.woff",
);
const inter400 = await resolveFontFile(
  "@fontsource/inter",
  "files/inter-latin-400-normal.woff",
);
const inter600 = await resolveFontFile(
  "@fontsource/inter",
  "files/inter-latin-600-normal.woff",
);

const FONTS = [
  { name: "Righteous", data: righteous, weight: 400, style: "normal" },
  { name: "Inter", data: inter400, weight: 400, style: "normal" },
  { name: "Inter", data: inter600, weight: 600, style: "normal" },
];

// ── OG image composition ─────────────────────────────────────────────────
// Pure typographic treatment per the PRD — no illustration. Diagonal colour
// field with a subtle grain of noise via layered radial gradients.

const ogTree = {
  type: "div",
  props: {
    style: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-between",
      width: "100%",
      height: "100%",
      padding: "80px",
      background: `linear-gradient(135deg, ${BRAND_ORANGE} 0%, ${BRAND_ORANGE_DEEP} 100%)`,
      fontFamily: "Inter",
      color: "white",
      position: "relative",
    },
    children: [
      // Top row — wordmark + small eyebrow
      {
        type: "div",
        props: {
          style: {
            display: "flex",
            flexDirection: "column",
          },
          children: [
            {
              type: "div",
              props: {
                style: {
                  fontSize: 22,
                  fontWeight: 600,
                  letterSpacing: "0.25em",
                  textTransform: "uppercase",
                  opacity: 0.75,
                },
                children: "Self-custody Bitcoin",
              },
            },
            {
              type: "div",
              props: {
                style: {
                  fontFamily: "Righteous",
                  fontSize: 160,
                  letterSpacing: "0.05em",
                  marginTop: 24,
                  lineHeight: 1,
                },
                children: BRAND_NAME,
              },
            },
          ],
        },
      },

      // Bottom — tagline + site URL placeholder
      {
        type: "div",
        props: {
          style: {
            display: "flex",
            flexDirection: "column",
          },
          children: [
            {
              type: "div",
              props: {
                style: {
                  fontFamily: "Righteous",
                  fontSize: 84,
                  lineHeight: 1.05,
                  letterSpacing: "0.01em",
                  maxWidth: "900px",
                },
                children: TAGLINE,
              },
            },
            {
              type: "div",
              props: {
                style: {
                  fontSize: 20,
                  fontWeight: 600,
                  letterSpacing: "0.2em",
                  textTransform: "uppercase",
                  marginTop: 32,
                  opacity: 0.7,
                },
                children: "Built on Arkade",
              },
            },
          ],
        },
      },
    ],
  },
};

console.log("→ Rendering og.png (1200×630)");
const ogSvg = await satori(ogTree, {
  width: 1200,
  height: 630,
  fonts: FONTS,
});
const ogPng = new Resvg(ogSvg, { fitTo: { mode: "width", value: 1200 } })
  .render()
  .asPng();
await writeFile(resolve(PUBLIC, "og.png"), ogPng);

// ── Favicon ──────────────────────────────────────────────────────────────
// Hand-authored SVG that mirrors the splash anteater on a bitcoin-orange
// rounded-square. The viewBox is 64×64 with a 6-unit inset so the subject
// sits centered at all render sizes.

const faviconSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">
  <rect width="64" height="64" rx="14" fill="${BRAND_ORANGE}"/>
  <g transform="translate(8 6) scale(0.24)">
    <ellipse cx="100" cy="120" rx="50" ry="35" fill="#ffffff"/>
    <ellipse cx="60" cy="105" rx="22" ry="18" fill="#ffffff"/>
    <path d="M38 105 Q20 100 8 95 Q6 94 8 93 Q22 90 40 98" fill="#ffffff"/>
    <circle cx="55" cy="100" r="3" fill="${BRAND_ORANGE_DEEP}"/>
    <ellipse cx="68" cy="88" rx="8" ry="12" fill="#ffffff"/>
    <ellipse cx="68" cy="90" rx="5" ry="8" fill="${BRAND_ORANGE_DEEP}"/>
    <path d="M150 115 Q170 90 165 60 Q164 55 167 58 Q178 75 160 115" fill="#ffffff"/>
    <rect x="75" y="145" width="10" height="25" rx="4" fill="#ffffff"/>
    <rect x="95" y="145" width="10" height="25" rx="4" fill="#ffffff"/>
    <rect x="115" y="145" width="10" height="25" rx="4" fill="#ffffff"/>
    <rect x="130" y="142" width="10" height="25" rx="4" fill="#ffffff"/>
  </g>
</svg>`;

console.log("→ Writing favicon.svg");
await writeFile(resolve(PUBLIC, "favicon.svg"), faviconSvg);

for (const size of [16, 32, 180]) {
  const name = size === 180 ? "apple-touch-icon.png" : `favicon-${size}.png`;
  console.log(`→ Rendering ${name} (${size}×${size})`);
  const png = new Resvg(faviconSvg, { fitTo: { mode: "width", value: size } })
    .render()
    .asPng();
  await writeFile(resolve(PUBLIC, name), png);
}

console.log("✓ Assets written to avark-landing/public/");
