#!/usr/bin/env ts-node

import { libs } from './constant/libs';

console.log(libs().map((e) => ({ path: `./libs/${e}` })));
