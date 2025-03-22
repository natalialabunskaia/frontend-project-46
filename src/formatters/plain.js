import _ from 'lodash';

const valueFormatter = (value) => {
  if (_.isObject(value)) {
    return '[complex value]';
  }
  return `${value}`;
};

const plain = (tree) => {
  const iter = (node, path = '') => {
    const result = node.map((element) => {
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
          return `Property '${currentPath(path)}' was added with value: '${valueFormatter(element.value)}'`;
        case 'changed':
          return `Property '${currentPath(path)}' was updated. From '${valueFormatter(element.value1)}' to '${valueFormatter(element.value2)}'`;
        default:
          return '';
      }
    });
    return result.join('\n');
  };
  return `${iter(tree)}`;
};

const data = [
  {
    key: 'common',
    children: [
      {
        key: 'follow',
        value: false,
        type: 'added',
      },
      {
        key: 'setting1',
        value: 'Value 1',
        type: 'unchanged',
      },
      {
        key: 'setting2',
        value: 200,
        type: 'deleted',
      },
      {
        key: 'setting3',
        value1: true,
        value2: null,
        type: 'changed',
      },
      {
        key: 'setting4',
        value: 'blah blah',
        type: 'added',
      },
      {
        key: 'setting5',
        value: {
          key5: 'value5',
        },
        type: 'added',
      },
      {
        key: 'setting6',
        children: [
          {
            key: 'doge',
            children: [
              {
                key: 'wow',
                value1: '',
                value2: 'so much',
                type: 'changed',
              },
            ],
            type: 'nested',
          },
          {
            key: 'key',
            value: 'value',
            type: 'unchanged',
          },
          {
            key: 'ops',
            value: 'vops',
            type: 'added',
          },
        ],
        type: 'nested',
      },
    ],
    type: 'nested',
  },
  {
    key: 'group1',
    children: [
      {
        key: 'baz',
        value1: 'bas',
        value2: 'bars',
        type: 'changed',
      },
      {
        key: 'foo',
        value: 'bar',
        type: 'unchanged',
      },
      {
        key: 'nest',
        value1: {
          key: 'value',
        },
        value2: 'str',
        type: 'changed',
      },
    ],
    type: 'nested',
  },
  {
    key: 'group2',
    value: {
      abc: 12345,
      deep: {
        id: 45,
      },
    },
    type: 'deleted',
  },
  {
    key: 'group3',
    value: {
      deep: {
        id: {
          number: 45,
        },
      },
      fee: 100500,
    },
    type: 'added',
  },
];
console.log(plain(data));
export default plain;
