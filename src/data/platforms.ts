export const REPO = 'degenview/degenview';
export const REPO_URL = `https://github.com/${REPO}`;
/** The user guide, built from the degenview/docs repository. */
export const DOCS_URL = 'https://docs.degenview.app/';
export const RELEASES_URL = `${REPO_URL}/releases`;
/** `/releases/latest` 404s while only pre-releases exist, so the fallback is the releases list. */
export const LATEST_URL = RELEASES_URL;

export type OsName = 'macOS' | 'Windows' | 'Linux';
export type Arch = 'arm64' | 'x64';
export type PlatformId = 'macos-arm64' | 'macos-x64' | 'windows-x64' | 'windows-arm64' | 'linux-x64' | 'linux-arm64';

/** One downloadable file kind. The first format of an OS is its default. */
export interface Format {
  /** Appended to `DegenView-<tag>-<platform id>` to form the asset name. */
  suffix: string;
  name: string;
  ext: string;
}

export interface Platform {
  id: PlatformId;
  os: OsName;
  arch: Arch;
  label: string;
  /** Short architecture label, e.g. "Apple Silicon". */
  short: string;
  formats: [Format, ...Format[]];
}

export const FORMATS: Record<OsName, [Format, ...Format[]]> = {
  macOS: [
    { suffix: '.dmg', name: 'Disk image', ext: 'dmg' },
    { suffix: '.zip', name: 'Zip archive', ext: 'zip' },
  ],
  Windows: [
    { suffix: '-setup.exe', name: 'Installer', ext: 'exe' },
    { suffix: '.zip', name: 'Portable zip', ext: 'zip' },
  ],
  Linux: [
    { suffix: '.tar.gz', name: 'Tarball', ext: 'tar.gz' },
    { suffix: '.flatpak', name: 'Flatpak', ext: 'flatpak' },
  ],
};

const platform = (id: PlatformId, os: OsName, arch: Arch, short: string): Platform => ({
  id,
  os,
  arch,
  short,
  label: `${os} (${short})`,
  formats: FORMATS[os],
});

export const PLATFORMS: Platform[] = [
  platform('macos-arm64', 'macOS', 'arm64', 'Apple Silicon'),
  platform('macos-x64', 'macOS', 'x64', 'Intel'),
  platform('windows-x64', 'Windows', 'x64', 'x64'),
  platform('windows-arm64', 'Windows', 'arm64', 'ARM64'),
  platform('linux-x64', 'Linux', 'x64', 'x64'),
  platform('linux-arm64', 'Linux', 'arm64', 'ARM64'),
];

export const OS_NAMES: OsName[] = ['Windows', 'macOS', 'Linux'];

export interface ReleaseInfo {
  /** e.g. `v0.6.0-rc.14`, or null when the API was unreachable at build time */
  tag: string | null;
  /** Default download per platform. */
  urls: Record<PlatformId, string>;
}

/** Asset naming comes from the app repo's release workflow. */
export function assetUrl(tag: string | null, p: Platform, f: Format): string {
  return tag ? `${RELEASES_URL}/download/${tag}/DegenView-${tag}-${p.id}${f.suffix}` : LATEST_URL;
}

export function releaseFromTag(tag: string | null): ReleaseInfo {
  const urls = {} as Record<PlatformId, string>;
  for (const p of PLATFORMS) urls[p.id] = assetUrl(tag, p, p.formats[0]);
  return { tag, urls };
}

/** Newest published release, pre-releases included (the API lists newest first). */
export function pickTag(releases: { tag_name?: string; draft?: boolean }[]): string | null {
  return releases.find((r) => !r.draft && r.tag_name)?.tag_name ?? null;
}
