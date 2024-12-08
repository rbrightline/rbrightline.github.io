#!/usr/bin/env ts-node
/**
 * Build and publish a specific library by name
 */

import q from 'inquirer';
import { libs } from './constant/libs';
import { build } from './helpers/build';
import { publish } from './helpers/publish';

q.prompt([
  {
    name: 'lib',
    type: 'list',
    message: 'Which library would you like to publish?',
    choices: libs(),
  },
]).then(({ lib }) => {
  build(lib);
  publish(lib);
});
