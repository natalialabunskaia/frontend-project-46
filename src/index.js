import parse from './parser.js';
import treeOfDiff from './builderTreeOfDiff.js';
import stylish from './formatters/stylish.js';
import plain from './formatters/plain.js';

const genDiff = (filepath1, file1Path2, format = 'stylish') => {
  const coll1 = parse(filepath1);
  const coll2 = parse(file1Path2);
  switch (format) {
    case 'stylysh':
      return stylish(treeOfDiff(coll1, coll2));
    case 'plain':
      return plain(treeOfDiff(coll1, coll2));
    default:
      return 'Unknown format';
  }
};

export default genDiff;
