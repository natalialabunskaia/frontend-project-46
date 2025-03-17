import _ from 'lodash';

const stringify = (coll, depth = 1) => {
  const spaces = depth * 4 - 2;
  const str = ' '.repeat(spaces);
  if (!_.isObject(coll)) {
    return `${coll}`;
  }
  const entries = Object.entries(coll);
  const lines = entries.map(([key, value]) => {
    if (_.isObject(value) && !_.isArray(value)) {
      return `${str}  ${key}: ${stringify(value, depth + 1)}`;
    }
    return `${str}  ${key}: ${value}`;
  });
  return `{\n${lines.join('\n')}\n${str.slice(0, -2)}}`;
};

const stylish = (tree, depth = 1) => {
  const result = tree.map((element) => {
    const spaces = depth * 4 - 2;
    const str = ' '.repeat(spaces);
    switch (element.type) {
      case 'nested':
        return `${str}  ${element.key}: {\n${stylish(element.children, depth + 1)}\n  ${str}}`;
      case 'unchanged':
        return `${str}  ${element.key}: ${stringify(element.value, depth + 1)}`;
      case 'deleted':
        return `${str}- ${element.key}: ${stringify(element.value, depth + 1)}`;
      case 'added':
        return `${str}+ ${element.key}: ${stringify(element.value, depth + 1)}`;
      case 'changed':
        return `${str}- ${element.key}: ${stringify(element.value1, depth + 1)}\n${str}+ ${element.key}: ${stringify(element.value2, depth + 1)}`;
      default:
        return '';
    }
  });
  return `${result.join('\n')}`;
};

export default stylish;
