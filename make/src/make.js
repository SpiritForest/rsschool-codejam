module.exports = function make(a) {
  const res = [];
  res.push(a);
  return function closer(...b) {
    res.push(...b);
    if (res[res.length - 1] instanceof Function) {
      const fn = res[res.length - 1];
      res.pop();
      return res.reduce(fn);
    }
    return closer;
  };
};
