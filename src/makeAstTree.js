import _ from 'lodash';

const makeAstTree = (data1, data2) => {
  const keys = _.sortBy(_.union(_.keys(data1), _.keys(data2)));

  return keys.map((key) => {
    const value1 = data1[key];
    const value2 = data2[key];

    if (_.isObject(value1) && _.isObject(value2)) {
      return { key, children: makeAstTree(value1, value2), type: 'nested' };
    }
    if (!_.has(data1, key)) {
      return { key, value: value2, type: 'added' };
    }
    if (!_.has(data2, key)) {
      return { key, value: value1, type: 'deleted' };
    }
    if (value1 !== value2) {
      return {
        key,
        oldValue: value1,
        newValue: value2,
        type: 'changed',
      };
    }

    return { key, value: value1, type: 'unchanged' };
  });
};

export default makeAstTree;
