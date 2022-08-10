/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (s) {
  // const arrStr = [...s.toLowerCase()].filter(character => '0123456789abcdefghijklmnopqrstuvwxyz'.includes(character));
  // // console.log(arrStr);
  // let leftIndex = 0, rightIndex = arrStr.length - 1;
  // while(leftIndex < rightIndex){
  //     if(arrStr[leftIndex] !== arrStr[rightIndex]) return false;
  //     leftIndex ++;
  //     rightIndex --;
  // }
  // return true;
  const arrStr = [...s.toLowerCase()].filter((character) =>
    "0123456789abcdefghijklmnopqrstuvwxyz".includes(character)
  );
  return compareString(arrStr);
};

const compareString = function (arrStr) {
  if (arrStr.length <= 1) return true;
  const head = arrStr.shift();
  const tail = arrStr.pop();
  if (head !== tail) return false;
  return compareString(arrStr);
};
