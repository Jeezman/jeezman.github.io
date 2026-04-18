# @avark/landing

Marketing landing page for [Avark](../README.md). Pure static SPA — Vite + React 19 + TanStack Router + Tailwind v4. Deploys to GitHub Pages.

## Stack

- **Vite 7** — bundler
- **React 19** — UI
- **TanStack Router** (SPA mode) — file-based routing (`src/routes/`), route tree auto-generated into `src/routeTree.gen.ts` by `@tanstack/router-plugin/vite`
- **Tailwind v4** — styling, via `@tailwindcss/vite`
- No server runtime, no SSR, no server routes

## Scripts

Run from the repo root:

```bash
pnpm --filter @avark/landing dev         # dev server on :3000
pnpm --filter @avark/landing build       # static build to avark-landing/dist
pnpm --filter @avark/landing preview     # preview the built site
pnpm --filter @avark/landing typecheck
pnpm --filter @avark/landing lint
```

## Base path

Vite's `base` is env-driven so the same build works on both GitHub Pages subpath and a future custom domain:

```bash
# GitHub Pages default URL (user.github.io/avark/)
VITE_BASE=/avark/ pnpm --filter @avark/landing build

# Custom domain (future)
VITE_BASE=/ pnpm --filter @avark/landing build
```

If `VITE_BASE` is unset, it defaults to `/` (dev-friendly).

## Deploy

Static files are emitted to `avark-landing/dist/`. GitHub Actions (see US-013) will build with the correct `VITE_BASE` and upload via `actions/deploy-pages`. `public/.nojekyll` is shipped so Vite's hashed asset paths aren't stripped by Jekyll.

## SEO & brand assets

OG image, favicons, `robots.txt`, `sitemap.xml`, and the structured-data
JSON-LD are all set up. Regenerate the binary assets any time the tagline,
wordmark, or brand colors change:

```bash
pnpm --filter @avark/landing generate-assets
```

That script writes `og.png` (1200×630 typographic composition), `favicon.svg`,
`favicon-16.png`, `favicon-32.png`, and `apple-touch-icon.png` into
`avark-landing/public/`. All outputs are committed to the repo.

### Canonical URL

The canonical URL is hardcoded to `https://jeezman.github.io/avark/` in:

- `index.html` — `<link rel="canonical">`, `og:url`, `og:image`, `twitter:image`, JSON-LD `url` + `image`
- `public/robots.txt` — `Sitemap:` line
- `public/sitemap.xml` — `<loc>` entry

When the site moves to a custom domain, grep for the string and update all
occurrences.

## Why TanStack Router and not TanStack Start?

The site has no server routes, no SSR, and no server functions — Start's value props don't apply. TanStack Router gives us the same file-based, type-safe routing with zero runtime and a trivially static build. It's also what the Tauri app already uses, so the routing mental model is consistent across the repo.
