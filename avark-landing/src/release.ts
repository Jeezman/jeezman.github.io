import { useEffect, useState } from "react";
import { LATEST_RELEASE, type ReleaseInfo } from "./generated/release";

export type { ReleaseInfo, ReleaseAsset } from "./generated/release";

const REPO = "Jeezman/avark";
const API = `https://api.github.com/repos/${REPO}/releases?per_page=10`;

type GhRelease = {
  tag_name: string;
  name: string | null;
  html_url: string;
  published_at: string | null;
  prerelease: boolean;
  draft: boolean;
  assets: Array<{
    name: string;
    browser_download_url: string;
    size: number;
    content_type: string;
  }>;
};

function pickLatest(all: GhRelease[]): ReleaseInfo | null {
  const published = all
    .filter((r) => !r.draft && r.published_at)
    .sort((a, b) => Date.parse(b.published_at!) - Date.parse(a.published_at!));
  const latest = published[0];
  if (!latest) return null;
  return {
    version: latest.tag_name,
    name: latest.name ?? latest.tag_name,
    htmlUrl: latest.html_url,
    publishedAt: latest.published_at!,
    prerelease: latest.prerelease,
    assets: latest.assets.map((a) => ({
      name: a.name,
      browserDownloadUrl: a.browser_download_url,
      size: a.size,
      contentType: a.content_type,
    })),
  };
}

// Seed from the build-time baked value (no flash on first paint), then
// refresh from the GitHub API so visitors always see the newest release
// without requiring a rebuild & redeploy.
export function useLatestRelease(): ReleaseInfo | null {
  const [release, setRelease] = useState<ReleaseInfo | null>(LATEST_RELEASE);

  useEffect(() => {
    let cancelled = false;
    fetch(API, { headers: { Accept: "application/vnd.github+json" } })
      .then((r) => (r.ok ? (r.json() as Promise<GhRelease[]>) : Promise.reject(r.statusText)))
      .then((json) => {
        if (cancelled) return;
        const next = pickLatest(json);
        if (next) setRelease(next);
      })
      .catch(() => {
        // Rate-limited or offline — keep the baked fallback.
      });
    return () => {
      cancelled = true;
    };
  }, []);

  return release;
}
