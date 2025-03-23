import _ from 'lodash';

const valueFormatter = (value) => {
  if (_.isObject(value)) {
    return '[complex value]';
  }
  if (typeof value === 'string') {
    return `'${value}'`;
  }
  return `${value}`;
};

const plain = (tree) => {
  const iter = (node, path = '') => {
    const result = node.flatMap((element) => {
      const currentPath = (value) => {
        if (value === '') {
          return `${element.key}`;
        }
        return `${value}.${element.key}`;
      };
      switch (element.type) {
        case 'nested':
          return `${iter(element.children, currentPath(path))}`;
        case 'deleted':
          return `Property '${currentPath(path)}' was removed`;
        case 'added':
          return `Property '${currentPath(path)}' was added with value: ${valueFormatter(element.value)}`;
        case 'changed':
          return `Property '${currentPath(path)}' was updated. From ${valueFormatter(element.value1)} to ${valueFormatter(element.value2)}`;
        default:
          return [];
      }
    });
    return result.join('\n');
  };
  return `${iter(tree)}`;
};

export default plain;
