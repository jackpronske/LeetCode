const shift = (letter, amount) => {
  const alphabet = "abcdefghijklmnopqrstuvwxyz";
  let alphaNum = alphabet.indexOf(letter);
  alphaNum = (alphaNum + amount) % 26;
  return alphabet[alphaNum];
};

const shiftingLetters = function (s, shifts) {
  for (let i = shifts.length - 2; i >= 0; i--) {
    shifts[i] = shifts[i] + shifts[i + 1];
  }
  for (let j = 0; j < s.length; j++) {
    let newletter = shift(s[j], shifts[j]);
    s = s.substring(0, j) + newletter + s.substring(j + 1);
  }

  return s;
};

module.exports = {
  shift,
  shiftingLetters,
};
