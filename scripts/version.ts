#!/usr/bin/env ts-node

import q from 'inquirer';
import { libs } from './constant/libs';
import { chdir } from 'process';
import { join } from 'path';
import { execSync } from 'child_process';
import { updateVersion } from './helpers/update-version';

q.prompt([
  {
    name: 'lib',
    type: 'list',
    message: 'Which library would you like to update version?',
    choices: libs(),
  },
  {
    name: 'versionType',
    type: 'list',
    message: 'Patch, minor or major version update?',
    choices: ['patch', 'minor', 'major'],
  },
]).then(({ lib, versionType }) => {
  const ROOT = join(__dirname, '..', 'libs', lib);
  const PACKAGE_JSON = join(ROOT, 'package.json');
  updateVersion(PACKAGE_JSON, versionType);

  chdir(ROOT);
  execSync('npx nx build');
  execSync('npm publish');
});
