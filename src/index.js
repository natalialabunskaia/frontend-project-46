import _ from 'lodash';
import parse from './parser.js';

const gendiff = (data1, data2) => {
  const parsedData1 = parse(data1);
  const parsedData2 = parse(data2);
  const keys = _.sortBy(_.union(Object.keys(parsedData1), Object.keys(parsedData2)));
  const result = keys.map((key) => {
    if (parsedData1[key] === parsedData2[key]) {
      return `   ${key}: ${parsedData1[key]}\n`;
    } // no changes
    if (!_.has(parsedData2, key)) {
      return ` - ${key}: ${parsedData1[key]}\n`;
    } // deleted
    if (!_.has(parsedData1, key)) {
      return ` + ${key}: ${parsedData2[key]}\n`;
    } // added
    return ` - ${key}: ${parsedData1[key]}\n + ${key}: ${parsedData2[key]}\n`; // changed
  });
  return `{\n${result.join('')}}`;
};
export default gendiff;
