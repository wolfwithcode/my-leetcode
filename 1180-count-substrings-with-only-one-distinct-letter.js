/**
 * @param {string} s
 * @return {number}
 */
var countLetters = function (s) {
  let count = 1;
  let result = 0;
  for (let i = 1; i < s.length; i++) {
    if (s[i] === s[i - 1]) {
      count++;
      continue;
    }
    result += (count * (count + 1)) / 2;
    count = 1;
  }
  result += (count * (count + 1)) / 2;
  return result;
};
