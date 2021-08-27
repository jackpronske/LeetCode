const canReorderDoubled = require("./arrayOfDoubledPairs");
const stringSubsequence = require("./stringSubsequence");

describe("Array of Doubled Pairs", () => {
  test("Validity Checks", () => {
    expect(canReorderDoubled([3, 1, 3, 6])).toBe(false);
    expect(canReorderDoubled([2, 1, 2, 6])).toBe(false);
    expect(canReorderDoubled([4, -2, 2, -4])).toBe(true);
    expect(canReorderDoubled([1, 2, 4, 16, 8, 4])).toBe(false);
    expect(canReorderDoubled([0, 0])).toBe(true);
  });
});

describe("SubSequence", () => {
  test("Validity CHecks", () => {});
});
