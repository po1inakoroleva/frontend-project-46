import fs from 'fs';
import * as path from 'path';
import { dirname } from 'path';
import { fileURLToPath } from 'url';
import { expect, test } from '@jest/globals';
import getDiff from '../src/index.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const getFixturePath = (filename) => path.join(__dirname, '..', '__fixtures__', filename);
const readFile = (filename) => fs.readFileSync(getFixturePath(filename), 'utf-8');

const expectNestedStylish = readFile('expect_stylish.txt');

test('getdiff stylish nestedfile.json', () => {
  expect(getDiff(getFixturePath('filepath1.json'), getFixturePath('filepath2.json'))).toEqual(expectNestedStylish);
});

test('getDiff stylish nestedfile.yml', () => {
  expect(getDiff(getFixturePath('filepath1.yml'), getFixturePath('filepath2.yml'))).toEqual(expectNestedStylish);
});
