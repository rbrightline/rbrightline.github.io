#!/usr/bin/env ts-node
/**
 * List the versions of all libraries
 */
import { readFileSync } from 'fs';
import { libs } from './constant/libs';
import { join } from 'path';

libs().forEach((e) => {
  console.log(
    JSON.parse(
      readFileSync(join(__dirname, `../libs/${e}/package.json`)).toString()
    ).version
  );
});
