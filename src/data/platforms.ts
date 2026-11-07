export const REPO = 'degenview/degenview';
export const REPO_URL = `https://github.com/${REPO}`;
export const RELEASES_URL = `${REPO_URL}/releases`;
export const LATEST_URL = `${RELEASES_URL}/latest`;

export type PlatformId = 'macos-arm64' | 'macos-x64' | 'windows-x64' | 'linux-x64';

export interface Platform {
  id: PlatformId;
  os: 'macOS' | 'Windows' | 'Linux';
  label: string;
  short: string;
  ext: 'zip' | 'tar.gz';
}

export const PLATFORMS: Platform[] = [
  { id: 'macos-arm64', os: 'macOS', label: 'macOS (Apple Silicon)', short: 'Apple Silicon', ext: 'zip' },
  { id: 'macos-x64', os: 'macOS', label: 'macOS (Intel)', short: 'Intel', ext: 'zip' },
  { id: 'windows-x64', os: 'Windows', label: 'Windows (x64)', short: 'x64', ext: 'zip' },
  { id: 'linux-x64', os: 'Linux', label: 'Linux (x64)', short: 'x64', ext: 'tar.gz' },
];

export interface ReleaseInfo {
  /** e.g. `v0.1.2`, or null when the API was unreachable at build time */
  tag: string | null;
  urls: Record<PlatformId, string>;
}

/** Asset naming comes from the app repo's release workflow. */
export function releaseFromTag(tag: string | null): ReleaseInfo {
  const urls = {} as Record<PlatformId, string>;
  for (const p of PLATFORMS) {
    urls[p.id] = tag
      ? `${RELEASES_URL}/download/${tag}/DegenView-${tag}-${p.id}.${p.ext}`
      : LATEST_URL;
  }
  return { tag, urls };
}
