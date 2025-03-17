import parse from './parser.js';
import treeOfDiff from './builderTreeOfDiff.js';
import stylish from './stylish.js';

const genDiff = (filepath1, file1Path2, format = 'stylish') => {
  const coll1 = parse(filepath1);
  const coll2 = parse(file1Path2);
  return stylish(treeOfDiff(coll1, coll2));
};

export default genDiff;
