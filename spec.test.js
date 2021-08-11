const canReorderDoubled = require("./arrayOfDoubledPairs");

describe("Array of Doubled Pairs", () => {
  test("Validity Checks", () => {
    expect(canReorderDoubled([3, 1, 3, 6])).toBe(false);
    expect(canReorderDoubled([2, 1, 2, 6])).toBe(false);
    expect(canReorderDoubled([4, -2, 2, -4])).toBe(true);
    expect(canReorderDoubled([1, 2, 4, 16, 8, 4])).toBe(false);
  });
});
