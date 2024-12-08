#!/usr/bin/env ts-node
/**
 * Generate compodoc for a specific library
 */
// compodoc -p tsconfig.doc.json

import q from 'inquirer';
import { libs } from './constant/libs';
import { execSync } from 'child_process';
import { chdir } from 'process';
import { join } from 'path';

q.prompt([
  {
    name: 'lib',
    type: 'list',
    message: 'Pick library',
    choices: libs(),
  },
]).then(({ lib }) => {
  chdir(join(__dirname, '..', 'libs', lib));
  execSync(`compodoc -p tsconfig.json -d ../../docs/docs/${lib}`);
});
