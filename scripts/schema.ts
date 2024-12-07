#!/usr/bin/env ts-node

import { readFileSync, writeFileSync } from 'fs';
import { join } from 'path';

export function build(): void {
  const modelFilePath = join(__dirname, '..', 'schemas', 'model.json');
  const root = join('..', modelFilePath);
  const content = readFileSync(modelFilePath);
  writeFileSync(join(root, 'bundle.json'), content);
}

build();
