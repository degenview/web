import { releaseFromTag, REPO, type ReleaseInfo } from './platforms';

let cached: Promise<ReleaseInfo> | undefined;

/** Build-time lookup of the latest release. Never throws: falls back to /releases/latest links. */
export function getRelease(): Promise<ReleaseInfo> {
  cached ??= (async () => {
    try {
      const token = process.env.GITHUB_TOKEN;
      const res = await fetch(`https://api.github.com/repos/${REPO}/releases/latest`, {
        headers: {
          Accept: 'application/vnd.github+json',
          ...(token ? { Authorization: `Bearer ${token}` } : {}),
        },
        signal: AbortSignal.timeout(10_000),
      });
      if (!res.ok) throw new Error(`GitHub API ${res.status}`);
      const { tag_name } = (await res.json()) as { tag_name?: string };
      return releaseFromTag(tag_name ?? null);
    } catch (err) {
      console.warn(`[release] falling back to /releases/latest: ${err}`);
      return releaseFromTag(null);
    }
  })();
  return cached;
}
