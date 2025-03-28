import fs from 'node:fs';
import path from 'node:path';
import parce from './parce.js';

const getFileData = (pathToFile) => {
  const extname = path.extname(pathToFile);
  const absolutePath = path.resolve(process.cwd(), pathToFile);
  const data = fs.readFileSync(absolutePath, 'utf-8');
  return parce(data, extname);
};

export default getFileData;
