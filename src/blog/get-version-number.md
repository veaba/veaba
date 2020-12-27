# 原创：JavaScript 获取版本差值

## 题目

比较版本号 如果 version1 > version2 返回 1，如果 `version1 < version2` 返回 `-1`，不然返回 `0`.

输入的 version 字符串非空，只包含数字和字符.。.字符不代表通常意义上的小数点，只是用来区分数字序列。例如字符串 2.5 并不代表二点五，只是代表版本是第一级版本号是 2，第二级版本号是 5.

示例 1 输入

```
"0.1","1.1"
```

输出

```
-1
```

## 题目详解

思路 1：第一个点 `x 1`、第二个点 `x 10`、第三个 `x 100`,这个思路是错误的。

思路 2：把 `.` 当做小数点,注意：这里并非 `100%` 按照题目要求实现 `符号`

- 核心：拉平最大的数组长度
	- 缺点：未能解决进制借位的问题

```js
/**
 * 比较版本号
 * @param version1 string字符串
 * @param version2 string字符串
 * @return int整型
 */
function compare(version1, version2) {
	let left = version1.split(".");
	let right = version2.split(".");
	let len = 0;
	
	console.log(left, right);
	
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
	
	let leftCount = left.reduce((a, b) => a + b);
	let rightCount = right.reduce((a, b) => a + b);
	
	const diff = rightCount - leftCount;
	const countLen = (diff + "").length;
	const countArray = Array(len).fill("0");
	for (let i = 0; i < countLen; i++) {
		const diffStr = diff + "";
		countArray[len - 1 - i] = diffStr[i];
	}
	const ret = "-" + countArray.join(".");
	return ret;
}

console.log(compare("0.1", "1.1"));
console.log(compare("1.1", "1.11.1"));
// compare("1.1.1", "1.2");
```

思路3：借鉴思路2的基础，上做了借位出来，并通过了测试用例

```cmd 
// 可在根目录上执行
npm run test
```

具体的代码实现：

```js
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
	
	console.log(left, right);
	
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
```

本题目用到的测试用例：

```js
const compare = require("../examples/get-version-number");

describe("get-version-number", () => {
	it("version 0.1 -> 1.1 = 1.0", () => {
		expect(compare("0.1", "1.1")).toBe("1.0");
	});
	
	it("version 1.1 -> 1.1.1 = 0.0.1", () => {
		expect(compare("1.1", "1.1.1")).toBe("0.0.1");
	});
	
	it("version 1.0.1 -> 1.11 = 0.10.9", () => {
		expect(compare("1.0.1", "1.11")).toBe("0.10.9");
	});
});

```

## 结尾

- 本方法已覆盖部分测试用例，有问题的话，[还望指出](https://github.com/veaba/veaba/issues/new)

