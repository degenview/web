import { pickTag, releaseFromTag, REPO, type ReleaseInfo } from './platforms';

let cached: Promise<ReleaseInfo> | undefined;

/** Build-time lookup of the newest release (pre-releases included). Never throws: falls back to the releases page. */
export function getRelease(): Promise<ReleaseInfo> {
  cached ??= (async () => {
    try {
      const token = process.env.GITHUB_TOKEN;
      const res = await fetch(`https://api.github.com/repos/${REPO}/releases?per_page=5`, {
        headers: {
          Accept: 'application/vnd.github+json',
          ...(token ? { Authorization: `Bearer ${token}` } : {}),
        },
        signal: AbortSignal.timeout(10_000),
      });
      if (!res.ok) throw new Error(`GitHub API ${res.status}`);
      return releaseFromTag(pickTag((await res.json()) as { tag_name?: string; draft?: boolean }[]));
    } catch (err) {
      console.warn(`[release] falling back to the releases page: ${err}`);
      return releaseFromTag(null);
    }
  })();
  return cached;
}
