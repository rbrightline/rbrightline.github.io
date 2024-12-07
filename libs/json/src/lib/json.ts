import { readFileSync } from 'fs';
import { join } from 'path';

export function json(jsonFilePath: string): string {
  const root = join('..', jsonFilePath);
  const content = readFileSync(jsonFilePath);
  
  return 'json';
}
