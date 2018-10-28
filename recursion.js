let arr = [];

const recursion = (obj) => {
	let levelArr = []; let objArr = [];
	let left = 'left', right = 'right', value = 'value';
	if (!Array.isArray(obj)) obj = [obj];

	for (let i = 0; i < obj.length; i++) {
		levelArr.push(obj[i][value]);
	}
	arr.push(levelArr);

	for (let i = 0; i < obj.length; i++) {
		if (obj[i][left] == undefined || obj[i][right] == undefined) {return arr;}
		else objArr.push(obj[i][left], obj[i][right]);
	}


	return recursion(objArr);
}













let tree = {"value":100,"left":{"value":90,"left":{"value":70},"right":{"value":99}},"right":{"value":120,"left":{"value":110},"right":{"value":130}}};
console.log(recursion(tree));