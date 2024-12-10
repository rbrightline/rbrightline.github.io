#!/usr/bin/env ts-node

/**
 * Generate compodoc for all libraries
 */
// compodoc -p tsconfig.doc.json

import { libs } from './constant/libs';
import { execSync } from 'child_process';
import { chdir } from 'process';
import { join } from 'path';

libs().forEach((lib) => {
  try {
    console.log(`Generating document for ${lib}`);
    chdir(join(__dirname, '..', 'libs', lib));
    execSync(`compodoc -p tsconfig.json -d ../../docs/docs/${lib}`);
  } catch (err) {}
});
