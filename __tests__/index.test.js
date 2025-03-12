import { readFileSync } from 'fs';
import path, { dirname } from 'path';
import { fileURLToPath } from 'url';
import gendiff from '../src/index.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// test('gendiff should return correct difference for json files', () => {
//   const file1Path = path.join(__dirname, '..', '__fixtures__', 'file1.json');
//   const file2Path = path.join(__dirname, '..', '__fixtures__', 'file2.json');
//   const expectedPath = path.join(__dirname, '..', '__fixtures__', 'expected.txt');

//   const result = gendiff(file1Path, file2Path);
//   const expected = readFileSync(expectedPath, 'utf-8');
//   expect(result).toBe(expected);
// });

// test('gendiff should return correct difference for yml/yaml files', () => {
//   const file1Path = path.join(__dirname, '..', '__fixtures__', 'file1.yml');
//   const file2Path = path.join(__dirname, '..', '__fixtures__', 'file2.yaml');
//   const expectedPath = path.join(__dirname, '..', '__fixtures__', 'expected.txt');

//   const result = gendiff(file1Path, file2Path);
//   const expected = readFileSync(expectedPath, 'utf-8');
//   expect(result).toBe(expected);
// });

test('gendiff should return tree of difference', () => {
  const file1Path = path.join(__dirname, '..', '__fixtures', 'file1.json');
  const file2Path = path.join(dirname, '..', '__fixtures', 'file2.json');
  const expectedPath = path.join(
    dirname,
    '..',
    '__fixtures',
    'expected.txt',
  );

  const result = gendiff(file1Path, file2Path);
  const expected = readFileSync(expectedPath, 'utf-8');
  expect(result).toEqual(expected);
});
