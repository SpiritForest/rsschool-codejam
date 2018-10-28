const assert = require('assert');

Object.freeze(assert);
const sum = require('./src/index');

describe('Make summ', () => {
  it('should return correct array', () => {
    const summ = sum([2, 3, 4, 1]);
    assert.equal(JSON.stringify(summ), JSON.stringify([8, 7, 6, 9]));
  });

  it('should return correct array', () => {
    const summ = sum([2, 3, 4, 1, 3]);
    assert.equal(JSON.stringify(summ), JSON.stringify([11, 10, 9, 12, 10]));
  });
});
