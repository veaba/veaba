/**
 * 比较版本号
 * @param version1 string字符串
 * @param version2 string字符串
 * @return string
 */
function compare(version1, version2) {
	let left = version1.split("."); // [0,1]
	let right = version2.split("."); // [1.1]
	let len = 0;
	if (left.length > right.length) {
		len = left.length;
		// right fill
		const le = left.length - right.length;
		right = right.concat(Array(le).fill("0"));
	} else if (left.length < right.length) {
		// right fill
		const le = right.length - left.length;
		left = left.concat(Array(le).fill("0"));
		len = right.length;
	} else len = left.length;
	const arrayData = [];
	let decimal = 0; // 十进制借位
	for (let i = len - 1; i > -1; i--) {
		let rightItem = right[i];
		const leftItem = left[i];
		let diff = 0;
		/**
		 *   [1, 11, 0]
		 * - [1, 0 , 1]
		 * ------------------
		 * = [0, 10, 9]
		 */
		// decimal handler
		if ((rightItem + decimal) < leftItem) {
			rightItem = (rightItem + decimal) + 10;
			diff = rightItem - leftItem;
			decimal = 1;
		} else {
			diff = (rightItem - decimal) - leftItem;
			decimal = 0;
		}
		arrayData.push(diff);
	}
	
	// console.log("arrayData========>", arrayData);
	return arrayData.reverse().join('.');
}

// console.log(compare("0.1", "1.1") );
// console.log(compare("1.1", "1.1.1"));
// console.log(compare("1.0.1", "1.11"));
// compare("1.1", "1.11.1");
// compare("1.1.1", "1.2");
// 实例1：("0.1","1.1")   => 10->1
// 实例2:("1.1","1.11.1") => (211 -11) => 200 => 0.10.1

module.exports = compare;
