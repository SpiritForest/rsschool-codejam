const assert = require('assert');

Object.freeze(assert);
const recursion = require('./src/index');

describe('Make summ', () => {
  it('should return correct array', () => {
    const tree = {
      value: 100,
      left: {
        value: 90,
        left: { value: 70 },
        right: { value: 99 },
      },
      right: {
        value: 120,
        left: { value: 110 },
        right: { value: 130 },
      },
    };
    const rec = recursion(tree);
    assert.equal(JSON.stringify(rec), JSON.stringify([[100], [90, 120], [70, 99, 110, 130]]));
  });
});
