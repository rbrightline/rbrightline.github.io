#!/usr/bin/env ts-node

/**
 * Commit
 */
import { COMMIT_TAGS } from './constant/tags';
import { LIB_NAMES } from './constant/libs';

import q from 'inquirer';
import { execSync } from 'child_process';

q.prompt([
  {
    name: 'lib',
    type: 'list',
    message: 'Which library did you make the change in?',
    choices: LIB_NAMES,
  },
  { name: 'tag', type: 'list', message: 'Select a tag', choices: COMMIT_TAGS },
  {
    name: 'msg',
    type: 'input',
    message: 'Message',
    choices: COMMIT_TAGS,
  },
]).then(({ tag, lib, msg }) => {
  const message = `[${lib}] [${tag}] ${msg}`;
  console.log(message);

  execSync('git add .');
  execSync(`git commit -m"${message}"`);
  execSync('git push');
});
