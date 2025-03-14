import _ from 'lodash';

const gendiff = (data1, data2) => {
  const keys = _.sortBy(_.union(Object.keys(data1), Object.keys(data2)));
  const result = keys.map((key) => {
    const value1 = data1[key];
    const value2 = data2[key];

    if (_.isObject(value1) && _.isObject(value2)) {
      return {
        key,
        children: gendiff(value1, value2),
        type: 'nested',
      };
    }

    if (!_.has(data1, key)) {
      return {
        key,
        value: value2,
        type: 'added',
      };
    }

    if (!_.has(data2, key)) {
      return {
        key,
        value: value1,
        type: 'deleted',
      };
    }

    if (_.isEqual(value1, value2)) {
      return {
        key,
        value: value1,
        type: 'unchanged',
      };
    }

    return {
      key,
      value1,
      value2,
      type: 'changed',
    };
  });
  return result;
};

export default gendiff;
