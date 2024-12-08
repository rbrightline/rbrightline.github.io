#!/usr/bin/env ts-node

import q from 'inquirer';
import { libs } from './constant/libs';
import { chdir } from 'process';
import { join } from 'path';
import { execSync } from 'child_process';

q.prompt([
  {
    name: 'lib',
    type: 'list',
    message: 'Which library would you like to publish?',
    choices: libs(),
  },
]).then(({ lib }) => {
  chdir(join(__dirname, '..', 'libs', lib));
  execSync('npx nx build');
  execSync('')
});
