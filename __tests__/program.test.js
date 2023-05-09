import * as path from 'path';
import { fileURLToPath } from 'url';
import { expect, test } from '@jest/globals';
import { dirname } from 'path';
import * as fs from 'node:fs';
import getDiff from '../src/index.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const getFixturePath = (filename) => path.join(__dirname, '..', '__fixtures__', filename);
const readFile = (filename) => fs.readFileSync(getFixturePath(filename), 'utf-8');

const expectPlaneStylish = readFile('expect_stylish.txt');

test('getdiff stylish planefile.json', () => {
  expect(getDiff(getFixturePath('filepath1.json'), getFixturePath('filepath2.json'))).toEqual(expectPlaneStylish);
});
