export type VersionType = 'patch' | 'minor' | 'major';

export function newVersion(version: string, versionType: VersionType) {
  const [_major, _minor, _patch] = version.split('.');

  let major = parseInt(_major);
  let minor = parseInt(_minor);
  let patch = parseInt(_patch);

  if (versionType === 'major') {
    major++;
  } else if (versionType === 'minor') {
    minor++;
  } else if (versionType === 'patch') {
    patch++;
  }

  return [major, minor, patch].join('.');
}
