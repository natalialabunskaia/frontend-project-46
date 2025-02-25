import fs from 'node:fs';
import path from 'node:path';

export const readFile = (pathToFile) => {
  const absolutePath = path.resolve(process.cwd(), pathToFile);
  const data = fs.readFileSync(absolutePath, 'utf-8');
  return data;
};

export const parse = (data) => {
  const parsed = JSON.parse(data);
  return parsed;
};
