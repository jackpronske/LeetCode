const shift = (letter, amount) => {
  const alphabet = "abcdefghijklmnopqrstuvwxyz";
  let alphaNum = alphabet.indexOf(letter);
  alphaNum = (alphaNum + amount) % 26;
  return alphabet[alphaNum];
};

const shiftingLetters = function (s, shifts) {
  for (let i = 0; i < shifts.length; i++) {
    for (let j = 0; j < i + 1; j++) {
      let newletter = shift(s[j], shifts[i]);
      s = s.substring(0, j) + newletter + s.substring(j + 1);
    }
  }
  return s;
};

module.exports = {
  shift,
  shiftingLetters,
};
