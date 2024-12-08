import { readFileSync, writeFileSync } from 'fs';
import { newVersion, VersionType } from './new-version';

export function updateVersion(filePath: string, versionType: VersionType) {
  const content = readFileSync(filePath).toString();
  const obj = JSON.parse(content);
  const version = obj.version;
  const updatedVersion = newVersion(version, versionType);
  obj.version = updatedVersion;
  const newContent = JSON.stringify(obj);
  writeFileSync(filePath, newContent);
}
