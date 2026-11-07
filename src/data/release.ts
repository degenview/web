import { pickTag, releaseFromTag, REPO, REPO_URL, RELEASES_URL, type ReleaseInfo } from './platforms';

export interface ReleaseAsset {
  size: number;
  /** Hex SHA-256 as reported by GitHub for the uploaded file, when it reports one. */
  sha256?: string;
}

export interface PreviousRelease {
  tag: string;
  published?: string;
  prerelease: boolean;
  url: string;
}

/** What the download page needs on top of the tag and default URLs. Empty when the API was unreachable. */
export interface ReleaseDetails extends ReleaseInfo {
  published?: string;
  prerelease?: boolean;
  /** The release's page on GitHub (notes, all assets). */
  htmlUrl: string;
  /** Keyed by asset file name. */
  assets: Record<string, ReleaseAsset>;
  previous: PreviousRelease[];
}

interface ApiRelease {
  tag_name?: string;
  draft?: boolean;
  prerelease?: boolean;
  published_at?: string;
  html_url?: string;
  assets?: { name: string; size: number; digest?: string | null }[];
}

let cached: Promise<ReleaseDetails> | undefined;

function fallback(): ReleaseDetails {
  return { ...releaseFromTag(null), htmlUrl: RELEASES_URL, assets: {}, previous: [] };
}

/** Build-time lookup of the newest release (pre-releases included). Never throws: falls back to the releases page. */
export function getRelease(): Promise<ReleaseDetails> {
  cached ??= (async () => {
    try {
      const token = process.env.GITHUB_TOKEN;
      const res = await fetch(`https://api.github.com/repos/${REPO}/releases?per_page=6`, {
        headers: {
          Accept: 'application/vnd.github+json',
          ...(token ? { Authorization: `Bearer ${token}` } : {}),
        },
        signal: AbortSignal.timeout(10_000),
      });
      if (!res.ok) throw new Error(`GitHub API ${res.status}`);
      const releases = ((await res.json()) as ApiRelease[]).filter((r) => !r.draft && r.tag_name);
      const tag = pickTag(releases);
      const latest = releases.find((r) => r.tag_name === tag);
      if (!tag || !latest) return fallback();
      const assets: Record<string, ReleaseAsset> = {};
      for (const a of latest.assets ?? []) {
        assets[a.name] = { size: a.size, sha256: a.digest?.startsWith('sha256:') ? a.digest.slice(7) : undefined };
      }
      return {
        ...releaseFromTag(tag),
        published: latest.published_at,
        prerelease: latest.prerelease ?? false,
        htmlUrl: latest.html_url ?? `${REPO_URL}/releases/tag/${tag}`,
        assets,
        previous: releases
          .filter((r) => r.tag_name !== tag)
          .slice(0, 4)
          .map((r) => ({
            tag: r.tag_name!,
            published: r.published_at,
            prerelease: r.prerelease ?? false,
            url: r.html_url ?? `${REPO_URL}/releases/tag/${r.tag_name}`,
          })),
      };
    } catch (err) {
      console.warn(`[release] falling back to the releases page: ${err}`);
      return fallback();
    }
  })();
  return cached;
}
