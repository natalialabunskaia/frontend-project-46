import { readFileSync } from 'fs';
import path, { dirname } from 'path';
import { fileURLToPath } from 'url';
import genDiff from '../src/index.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

test('gendiff should return correct difference for json files (stylish)', () => {
  const file1Path = path.join(__dirname, '..', '__fixtures__', 'file1.json');
  const file2Path = path.join(__dirname, '..', '__fixtures__', 'file2.json');
  const expectedPath = path.join(__dirname, '..', '__fixtures__', 'expected_stylish.txt');

  const result = genDiff(file1Path, file2Path, 'stylish');
  const expected = readFileSync(expectedPath, 'utf-8');
  expect(result).toBe(expected);
});

test('gendiff should return correct difference for yml/yaml files (stylish)', () => {
  const file1Path = path.join(__dirname, '..', '__fixtures__', 'file1.yml');
  const file2Path = path.join(__dirname, '..', '__fixtures__', 'file2.yaml');
  const expectedPath = path.join(__dirname, '..', '__fixtures__', 'expected_stylish.txt');

  const result = genDiff(file1Path, file2Path, 'stylish');
  const expected = readFileSync(expectedPath, 'utf-8');
  expect(result).toBe(expected);
});

test('gendiff should return correct difference for json files (plain)', () => {
  const file1Path = path.join(__dirname, '..', '__fixtures__', 'file1.json');
  const file2Path = path.join(__dirname, '..', '__fixtures__', 'file2.json');
  const expectedPath = path.join(__dirname, '..', '__fixtures__', 'expected_plain.txt');

  const result = genDiff(file1Path, file2Path, 'plain');
  const expected = readFileSync(expectedPath, 'utf-8');
  expect(result).toBe(expected);
});

test('gendiff should return correct difference for yml/yaml files (plain)', () => {
  const file1Path = path.join(__dirname, '..', '__fixtures__', 'file1.yml');
  const file2Path = path.join(__dirname, '..', '__fixtures__', 'file2.yaml');
  const expectedPath = path.join(__dirname, '..', '__fixtures__', 'expected_plain.txt');

  const result = genDiff(file1Path, file2Path, 'plain');
  const expected = readFileSync(expectedPath, 'utf-8');
  expect(result).toBe(expected);
});

test('gendiff should return correct difference for json files (json)', () => {
  const file1Path = path.join(__dirname, '..', '__fixtures__', 'file1.json');
  const file2Path = path.join(__dirname, '..', '__fixtures__', 'file2.json');
  const expectedPath = path.join(__dirname, '..', '__fixtures__', 'expected_json.txt');

  const result = genDiff(file1Path, file2Path, 'json');
  const expected = readFileSync(expectedPath, 'utf-8');
  expect(result).toBe(expected);
});

test('gendiff should return correct difference for yml/yaml files (json)', () => {
  const file1Path = path.join(__dirname, '..', '__fixtures__', 'file1.yml');
  const file2Path = path.join(__dirname, '..', '__fixtures__', 'file2.yaml');
  const expectedPath = path.join(__dirname, '..', '__fixtures__', 'expected_json.txt');

  const result = genDiff(file1Path, file2Path, 'json');
  const expected = readFileSync(expectedPath, 'utf-8');
  expect(result).toBe(expected);
});
