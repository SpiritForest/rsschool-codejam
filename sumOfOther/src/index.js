module.exports = function sumOfOther(arg) {
  const sum = arg.reduce((acc, val) => acc + val);
  let res = Array.from(arg);
  res = res.map(val => sum - val);
  return res;
};
