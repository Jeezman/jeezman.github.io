/**
 * Single source of truth for the coined tagline. Consumed by hero, footer, OG image,
 * and anywhere else brand copy appears. See design-notes.md for the candidate process.
 */
export const TAGLINE = "Bitcoin without the waiting." as const;

export const BRAND = {
  name: "Avark",
  tagline: TAGLINE,
  githubUrl: "https://github.com/jeezman/avark",
  arkadeDocsUrl: "https://docs.arkadeos.com/",
} as const;
