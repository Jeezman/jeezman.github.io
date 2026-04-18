/**
 * Shared IDs for in-page section anchors. Nav links and section components
 * both consume these so they stay in sync. Keep in insertion order — that's
 * the order nav shows them.
 */
export const SECTIONS = [
  { id: "features", label: "Features" },
  { id: "how-it-works", label: "How it works" },
  { id: "security", label: "Security" },
  { id: "faq", label: "FAQ" },
] as const;

export type SectionId = (typeof SECTIONS)[number]["id"];
