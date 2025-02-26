import fs from 'node:fs';
import path, { dirname } from 'node:path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export const readFile = (pathToFile) => {
  const absolutePath = path.resolve(__dirname, pathToFile);
  const data = fs.readFileSync(absolutePath, 'utf-8');
  return data;
};

export const parse = (data) => JSON.parse(data);
