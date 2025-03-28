import treeOfDiff from './getTreeOfDiff.js';
import formatDIff from './formatters/index.js';
import getFileData from './getFileData.js';

const genDiff = (filepath1, filePath2, format = 'stylish') => {
  const coll1 = getFileData(filepath1);
  const coll2 = getFileData(filePath2);
  return formatDIff(treeOfDiff(coll1, coll2), format);
};

export default genDiff;
