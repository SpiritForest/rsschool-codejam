const arr = [];
module.exports = function recursion(objct) {
  const levelArr = []; const objArr = [];
  const left = 'left';
  const right = 'right';
  const value = 'value';
  let obj = objct;
  if (!Array.isArray(obj)) obj = [objct];
  for (let i = 0; i < obj.length; i += 1) {
    levelArr.push(obj[i][value]);
  }
  arr.push(levelArr);
  for (let i = 0; i < obj.length; i += 1) {
    if (obj[i][left] === undefined || obj[i][right] === undefined) { return arr; }
    objArr.push(obj[i][left], obj[i][right]);
  }
  return recursion(objArr);
};
