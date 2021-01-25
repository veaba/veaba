const arrayDeepLevel = function (array) {
	console.time('get-array-deep-level-test-2==>');
	const arrayStr = JSON.stringify(array);
	let clearArrayStr = "";
	// TODO: 这里的正则没有写好
	arrayStr.replace(/(?:(\[|\]))/g, function ($1) {
		clearArrayStr += $1;
		return $1;
	});
	
	const leftStrItems = [];
	// const rightStrItems = [];
	for (let i = 0; i < clearArrayStr.length; i++) {
		// start tag
		if (clearArrayStr[i] === "[") {
			leftStrItems.push(i);
		}
	}
	
	const leftMaps = {};
	for (let i = 0; i < leftStrItems.length; i++) {
		const item = leftStrItems[i];
		leftMaps[item] = i * 2 - item;
	}
	const levelArray = Object.values(leftMaps);
	
	console.timeEnd('get-array-deep-level-test-2==>');//  0.113037109375 ms
	return Math.max.apply(this, levelArray);
};

module.exports = arrayDeepLevel;
