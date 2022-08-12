/**
 * @param {number} tomatoSlices
 * @param {number} cheeseSlices
 * @return {number[]}
 */
var numOfBurgers = function (tomatoSlices, cheeseSlices) {
  if ((tomatoSlices - 2 * cheeseSlices) % 2 === 1) return [];
  const X = (tomatoSlices - 2 * cheeseSlices) / 2;
  if (X < 0) return [];
  const Y = cheeseSlices - X;
  if (Y < 0) return [];
  return [X, Y];
};
