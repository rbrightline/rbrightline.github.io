#!/usr/bin/env ts-node
/**
 * Update the version of a specific library by name and version type (patch, minor, major).
 */
import q from 'inquirer';
import { libs } from './constant/libs';
import { join } from 'path';
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
});
