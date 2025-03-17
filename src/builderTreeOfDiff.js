import _ from 'lodash';

const treeOfDiff = (coll1, coll2) => {
  const keys = _.sortBy(_.union(Object.keys(coll1), Object.keys(coll2)));
  const result = keys.map((key) => {
    const value1 = coll1[key];
    const value2 = coll2[key];

    if (_.isObject(value1) && _.isObject(value2)) {
      return {
        key,
        children: treeOfDiff(value1, value2),
        type: 'nested',
      };
    }

    if (!_.has(coll1, key)) {
      return {
        key,
        value: value2,
        type: 'added',
      };
    }

    if (!_.has(coll2, key)) {
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

export default treeOfDiff;
