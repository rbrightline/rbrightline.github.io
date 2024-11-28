#!/usr/bin/env ts-node

import { tags } from './constant/tags';
import q from 'inquirer';
import { execSync } from 'child_process';
import { modules } from './constant/modules';

q.prompt([
  {
    name: 'lib',
    type: 'list',
    message: 'Which library did you make the change in?',
    choices: modules(),
  },
  { name: 'tag', type: 'list', message: 'Select a tag', choices: tags() },
  {
    name: 'msg',
    type: 'input',
    message: 'Message',
  },
  {
    name: 'push',
    type: 'confirm',
    message: 'Would you like to push?',
    default: false,
  },
]).then(({ tag, lib, msg, push }) => {
  const message = `[${lib}] [${tag}] ${msg}`;
  console.log(message);

  execSync('git add .');
  execSync(`git commit -m"${message}"`);

  if (push == true) {
    execSync('git push');
  }
});
