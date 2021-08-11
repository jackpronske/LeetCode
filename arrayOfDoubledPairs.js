/*

Given an array of integers arr of even length, return true if and only if it is possible to reorder it such that arr[2 * i + 1] = 2 * arr[2 * i] for every 0 <= i < len(arr) / 2.

Example 1:
[3,1,3,6] = false

Example 2:
[2,1,2,6] = false

Example 3:
[4,-2,2,-4] = true

Example 4:
[1,2,4,16,8,4] = false;

*/

const checker = (a, b) => {
  return a * 2 === b || b * 2 === a || a / 2 === b || b / 2 === a;
};

var canReorderDoubled = function (arr) {
  let changed = true;

  while (changed === true) {
    changed = false;
    for (let i = 1; i < arr.length; i++) {
      if (checker(arr[0], arr[i])) {
        arr.splice(i, 1);
        arr.shift();
        changed = true;
        break;
      }
    }
  }
  return arr.length ? false : true;
};

module.exports = canReorderDoubled;
