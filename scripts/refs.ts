#!/usr/bin/env ts-node
/**
 * Print the referance paths of all libraries
 */

import { libs } from './constant/libs';

console.log(libs().map((e) => ({ path: `./libs/${e}` })));
