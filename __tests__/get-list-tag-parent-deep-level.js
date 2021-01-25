const arrayDeepLevel = require("../examples/get-array-deep-level-2");

describe("get array level", () => {
	it("1. ==> level:3", () => {
		expect(arrayDeepLevel([1, 2, [3, [1, [0]]]])).toBe(3);
	});
	it("2. ==> level:0", () => {
		expect(arrayDeepLevel([])).toBe(0);
	});
	it("3. ==> level:3", () => {
		expect(arrayDeepLevel([[[]]])).toBe(2);
	});
	it("4. ==> level:3", () => {
		// 因为原题目是元素的包括了自己，实际上这里是二级
		expect(arrayDeepLevel([0, [1], [1, [2]]])).toBe(2);
	});
});
