const canReorderDoubled = require("./arrayOfDoubledPairs");
const { shiftingLetters, shift } = require("./shiftingLetters");
const { subsequence, longestSubSequence } = require("./stringSubsequence");
const { ListNode, addTwoNumbers } = require("./addTwoNumbers");

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

describe("Shifting Letters", () => {
  test("Validity Checks", () => {
    expect(shift("a", 1)).toBe("b");
    expect(shift("a", 27)).toBe("b");

    expect(shiftingLetters("aaa", [1, 2, 3])).toBe("gfd");
    expect(shiftingLetters("abc", [3, 5, 9])).toBe("rpl");
  });
});

describe("Add Two Numbers", () => {
  test("Validity Checks", () => {
    let testNode1 = new ListNode(1);
    let testNode2 = new ListNode(2);
    let testNode3 = new ListNode(3);
    testNode1.next = testNode2;
    testNode2.next = testNode3;

    let testNode4 = new ListNode(4);
    let testNode5 = new ListNode(5);
    let testNode6 = new ListNode(6);
    testNode4.next = testNode5;
    testNode5.next = testNode6;

    expect(addTwoNumbers(testNode1, testNode4).value).toBe(5);
  });
});
