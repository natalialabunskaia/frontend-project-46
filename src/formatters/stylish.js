import _ from 'lodash';

const indent = (depth) => ' '.repeat(depth * 4 - 2);

const stringify = (coll, depth) => {
  const str = indent(depth);
  if (!_.isObject(coll) || _.isArray(coll)) {
    return `${coll}`;
  }
  const entries = Object.entries(coll);
  const lines = entries.map(
    ([key, value]) => `${str}  ${key}: ${stringify(value, depth + 1)}`,
  );
  return `{\n${lines.join('\n')}\n${str.slice(0, -2)}}`;
};

const stylish = (tree) => {
  const iter = (node, depth = 1) => {
    const result = node.map((element) => {
      const str = indent(depth);
      switch (element.type) {
        case 'nested':
          return `${str}  ${element.key}: {\n${iter(element.children, depth + 1)}\n  ${str}}`;
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
    return result.join('\n');
  };
  return `{\n${iter(tree)}\n}`;
};

export default stylish;
