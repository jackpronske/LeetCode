const longestString = (s) => {
  if (s.length === 0) return 0;
  let window = [s[0]];
  let longest = 1;
  for (let i = 0; i < s.length; i++) {
    if (!window.includes(s[i])) {
      window.push(s[i]);
      longest = Math.max(longest, window.length);
    } else {
      window.shift();
      i--;
    }
  }
  return longest;
};

module.exports = {
  longestString,
};
