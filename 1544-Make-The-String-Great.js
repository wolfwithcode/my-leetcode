/**
 * @param {string} s
 * @return {string}
 */
var makeGood = function (s) {
  const characters = [...s];
  const stack = [];
  //   const upperCharacters = [
  //     "A",
  //     "B",
  //     "C",
  //     "D",
  //     "E",
  //     "F",
  //     "G",
  //     "H",
  //     "I",
  //     "J",
  //     "K",
  //     "L",
  //     "M",
  //     "N",
  //     "O",
  //     "P",
  //     "Q",
  //     "R",
  //     "S",
  //     "T",
  //     "U",
  //     "V",
  //     "W",
  //     "X",
  //     "Y",
  //     "Z",
  //   ];
  // const pairsMap = upperCharacters.reduce((previousValue, upperCharacter) => {
  //     const lowerCharacter = upperCharacter.toLowerCase();
  //     previousValue[upperCharacter] = lowerCharacter;
  //     previousValue[lowerCharacter] = upperCharacter;
  //     return previousValue;
  // }, {})
  // console.log(pairsMap);
  // const upperCharactersSet = new Set(upperCharacters);
  const pairsMap = {
    A: "a",
    a: "A",
    B: "b",
    b: "B",
    C: "c",
    c: "C",
    D: "d",
    d: "D",
    E: "e",
    e: "E",
    F: "f",
    f: "F",
    G: "g",
    g: "G",
    H: "h",
    h: "H",
    I: "i",
    i: "I",
    J: "j",
    j: "J",
    K: "k",
    k: "K",
    L: "l",
    l: "L",
    M: "m",
    m: "M",
    N: "n",
    n: "N",
    O: "o",
    o: "O",
    P: "p",
    p: "P",
    Q: "q",
    q: "Q",
    R: "r",
    r: "R",
    S: "s",
    s: "S",
    T: "t",
    t: "T",
    U: "u",
    u: "U",
    V: "v",
    v: "V",
    W: "w",
    w: "W",
    X: "x",
    x: "X",
    Y: "y",
    y: "Y",
    Z: "z",
    z: "Z",
  };
  for (let character of characters) {
    const pairCharater = pairsMap[character];
    const lasCharacter = stack[stack.length - 1];
    if (lasCharacter === pairCharater) {
      // console.log({character});
      stack.pop();
      continue;
    }

    stack.push(character);
  }
  // console.log({stack});
  return stack.join("");
};
