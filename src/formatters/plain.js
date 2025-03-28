import _ from 'lodash';

const formatValue = (value) => {
  if (_.isObject(value)) {
    return '[complex value]';
  }
  if (typeof value === 'string') {
    return `'${value}'`;
  }
  return `${value}`;
};

const getCurrentPath = (path, key) => {
  if (path === '') {
    return `${key}`;
  }
  return `${path}.${key}`;
};

const plain = (tree) => {
  const iter = (node, path = '') => {
    const result = node.flatMap((element) => {
      const currentPath = getCurrentPath(path, element.key);
      switch (element.type) {
        case 'nested':
          return `${iter(element.children, currentPath)}`;
        case 'unchanged':
          return [];
        case 'deleted':
          return `Property '${currentPath}' was removed`;
        case 'added':
          return `Property '${currentPath}' was added with value: ${formatValue(element.value)}`;
        case 'changed':
          return `Property '${currentPath}' was updated. From ${formatValue(element.value1)} to ${formatValue(element.value2)}`;
        default:
          throw new Error(`Unexpected type: ${element.type}`);
      }
    });
    return result.join('\n');
  };
  return `${iter(tree)}`;
};

export default plain;
