import parse from './parser.js';
import treeOfDiff from './builderTreeOfDiff.js';
import formatter from './formatters/index.js';

const genDiff = (filepath1, filePath2, format = 'stylish') => {
  const coll1 = parse(filepath1);
  const coll2 = parse(filePath2);
  return formatter(treeOfDiff(coll1, coll2), format);
};

export default genDiff;
