/**
 * @param {string} pattern
 * @param {string} s
 * @return {boolean}
 */
var wordPattern = function (pattern, s) {
  const arrStrPattern = [...pattern];
  const arrStr = s.split(" ");
  if (arrStrPattern.length !== arrStr.length) return false;
  // console.log("arrStrPattern ", arrStrPattern);
  // console.log("arrStr ", arrStr);
  const pairs = [];
  for (let index = 0; index < arrStrPattern.length; index++) {
    const patternCharacter = arrStrPattern[index];
    const subStr = arrStr[index];
    const exitingRecord = pairs.find((item) => {
      return (
        patternCharacter === item.patternCharacter && subStr === item.subStr
      );
    });
    if (exitingRecord) continue;
    const exitingPatternCharacter = pairs.find((item) => {
      return patternCharacter === item.patternCharacter;
    });
    if (exitingPatternCharacter) return false;
    const exitingSubStr = pairs.find((item) => {
      return subStr === item.subStr;
    });
    if (exitingSubStr) return false;
    pairs.push({ patternCharacter, subStr });
  }
  // console.log("pairs ", pairs);
  return true;
};
