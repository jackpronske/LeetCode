const longestPalSub = (inputString) => {
  let left, right;
  let index = 0;
  let result = inputString[0];
  while (index < inputString.length) {
      if (inputString[index] === inputString[index + 1]) {
          result = result.length === 1 ? inputString.substring(index, index + 1) : result;
          left = index - 1;
          right = index + 2;
      } else {
          left = index - 1;
          right = index + 1;
      }
      while (inputString[left] === inputString[right]) {
          let currentPal = inputString.substring(left, right + 1);
          result = result.length < currentPal.length ? currentPal:result;
          left--;
          right++;
      }
      index++;
  }
  return result;
}

console.log(longestPalSub('ababdd'));