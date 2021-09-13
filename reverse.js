const reverseInteger = (start) => {
  let isNegative = false;
  let result = 0;
  if (start < 0) {
    isNegative = true;
    start = Math.abs(start);
  }
  while (start > 0) {
      if (start > 9) {
          result = (result * 10) + (start % 10);
          start = Math.floor(start/10);
      } else {
        result = (result * 10) + start;
        start = 0;
      }
  }
  if (isNegative) {
      result = result - (result * 2)
  }
  return result
}

module.exports = {
    reverseInteger
}