/*
Given an array of strings strs, group the anagrams together. You can return the answer in any order.

An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.
*/

const objectMaker = (string) => {
  let result = {};
  for (let letter = 0; letter < string.length; letter++) {
    result[string[letter]]
      ? result[string[letter]]++
      : (result[string[letter]] = 1);
  }
  return result;
};

const compareObjs = (obj1, obj2) => {
  for (let key in obj1) {
    if (obj1[key] !== obj2[key]) {
      return false;
    }
  }
  return true;
};

var groupAnagrams = function (arr) {
  let blackListed = [];
  let resultArray = [];
  for (let i = 0; i < arr.length; i++) {
    if (blackListed.includes(i)) continue;
    let tempArray = [arr[i]];
    let tempObj1 = objectMaker(arr[i]);
    for (let j = i + 1; j < arr.length; j++) {
      if (blackListed.includes(j)) continue;
      let tempObj2 = objectMaker(arr[j]);
      if (compareObjs(tempObj1, tempObj2)) {
        tempArray.push(arr[j]);
        blackListed.push(j);
      }
    }
    resultArray.push(tempArray);
  }
  return resultArray;
};

console.log(groupAnagrams(["ate", "tea", "nat", "eat", "tan", "bat"]));
