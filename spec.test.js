const canReorderDoubled = require("./arrayOfDoubledPairs");
const { subsequence, longestSubSequence } = require("./stringSubsequence");

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
  test("Validity Checks", () => {
    expect(subsequence("abc", "adbsc")).toBe(true);
    expect(subsequence("abcc", "adbcsc")).toBe(true);
    expect(subsequence("abcc", "adbsc")).toBe(false);

    expect(longestSubSequence(["de", "a", "ab", "abc", "e", "abc"])).toBe(2);
    expect(longestSubSequence(["aba", "cdc", "eae"])).toBe(3);
    expect(longestSubSequence(["aaa", "aa", "a"])).toBe(-1);
  });
});
