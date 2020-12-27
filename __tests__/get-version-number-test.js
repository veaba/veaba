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
