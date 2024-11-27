import { readdirSync } from 'fs';
import { join } from 'path';

export const LIB_NAMES = [
  'page',
  'tool',
  'script',
  'env',
  ...readdirSync(join(__dirname, '..', '..', 'libs')),
];
