#!/usr/bin/env node

import { program } from 'commander';
import gendiff from '../src/index.js';
import parse from '../src/parser.js';

program
  .name('gendiff')
  .description('Compares two configuration files and shows a difference.')
  .version('1.0.0')
  .option('-f, --format [type]', 'output format')

  .argument('<filepath1>', 'path to file 1')
  .argument('<filepath2>', 'path to file 2')
  .action((filepath1, filepath2) => {
    const coll1 = parse(filepath1);
    const coll2 = parse(filepath2);
    console.log(JSON.stringify(gendiff(coll1, coll2), null, 2));
  });

program.parse();
