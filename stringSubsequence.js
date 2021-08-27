const subsequence = (str1, str2) => {
  let i = 0;
  let j = 0;
  while (j < str2.length) {
    if (str1[i] === str2[j]) {
      i++;
    }
    j++;
  }
  return i === str1.length;
};

const compareStringSizes = (str1, str2) => {
  return str1.length - str2.length;
};

const longestSubSequence = (arrayofStrings) => {
  let sortedStrings = arrayofStrings.sort(compareStringSizes);
  let result = -1;
  for (let i = 0; i < sortedStrings.length - 1; i++) {
    let exists = false;
    for (let j = i + 1; j < sortedStrings.length; j++) {
      if (subsequence(sortedStrings[i], sortedStrings[j])) {
        exists = true;
        break;
      }
    }
    result = exists ? result : Math.max(result, sortedStrings[i].length);
  }
  return result;
};

module.exports = {
  subsequence,
  longestSubSequence,
};
