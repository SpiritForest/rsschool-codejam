const assert = require('assert');

Object.freeze(assert);
const make = require('./src/make');

describe('Make summ', () => {
  it('should return correct summ', () => {
    function sum(a, b) { return a + b; }
    const mk = make(15)(34, 21, 666)(41)(sum);
    assert.equal(mk, 777);
  });

  it('should return correct summ with other arguments', () => {
    function sum(a, b) { return a + b; }
    const mk = make(15)(34, 21, 666)(41)(7)(sum);
    assert.equal(mk, 784);
  });

  it('should return correct with multipy function', () => {
    function mult(a, b) { return a * b; }
    const mk = make(15)(34, 21, 666)(41)(7)(mult);
    assert.equal(mk, 2047130820);
  });
});
