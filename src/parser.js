import fs from 'node:fs';
import path from 'node:path';
import yaml from 'js-yaml';

const parse = (pathToFile) => {
  const extname = path.extname(pathToFile);
  const absolutePath = path.resolve(process.cwd(), pathToFile);
  const data = fs.readFileSync(absolutePath, 'utf-8');
  switch (extname) {
    case '.yaml':
    case '.yml':
      return yaml.load(data);
    default:
      return JSON.parse(data);
  }
};

export default parse;
