const arrayDeepLevel = function (array) {
	console.time('get-array-deep-level-test==>')
	let level = -1;
	const recursion = function (data) {
		if (Array.isArray(data)) {
			for (let item of data) {
				if (Array.isArray(item)) {
					recursion(item);
				}
			}
			level++;
			return level;
		}
	};
	console.time('get-array-deep-level-test==>')
	// 0.0068359375 ms
	return recursion(array);
};

module.exports = arrayDeepLevel;

