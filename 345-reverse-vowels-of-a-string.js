/**
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function (s) {
  const arrStr = [...s];
  const isVowels = (c) => {
    return ["a", "e", "i", "o", "u"].includes(c.toLowerCase());
  };
  const swap = (leftIndex, rightIndex) => {
    const tempt = arrStr[leftIndex];
    arrStr[leftIndex] = arrStr[rightIndex];
    arrStr[rightIndex] = tempt;
  };
  let leftIndex = 0,
    rightIndex = s.length - 1;
  while (leftIndex < rightIndex) {
    if (!isVowels(arrStr[leftIndex])) leftIndex++;
    if (!isVowels(arrStr[rightIndex])) rightIndex--;
    if (isVowels(arrStr[leftIndex]) && isVowels(arrStr[rightIndex])) {
      swap(leftIndex, rightIndex);
      leftIndex++;
      rightIndex--;
    }
  }
  return arrStr.join("");
};
