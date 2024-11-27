import { readdirSync } from 'fs';
import { join } from 'path';

export function libs() {
  return readdirSync(join(__dirname, '..', '..', 'libs'));
}
