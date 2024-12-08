#!/usr/bin/env ts-node

import q from 'inquirer';
import { libs } from './constant/libs';
import { join } from 'path';
import { chdir } from 'process';
import { execSync } from 'child_process';

q.prompt([
  {
    name: 'lib',
    type: 'list',
    message: 'Which library would you like to publish?',
    choices: libs(),
  },
]).then(({ lib }) => {
  const ROOT = join(__dirname, '..', 'libs', lib);
  chdir(ROOT);
  execSync('npm publish');
});
