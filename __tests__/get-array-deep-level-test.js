const arrayDeepLevel = require("../examples/get-array-deep-level");

describe("get array level", () => {
	it("1. ==> level:3", () => {
		expect(arrayDeepLevel([1, 2, [3, [1, [0]]]])).toBe(3);
	});
	it("2. ==> level:0", () => {
		expect(arrayDeepLevel([])).toBe(0);
	});
	it("3. ==> level:2", () => {
		expect(arrayDeepLevel([[[]]])).toBe(2);
	});
	it("4. ==> level:2", () => {
		expect(arrayDeepLevel([0, [2], [2, [3]]])).toBe(3);
	});
});
