// Input: n = 3, paths = [[1,2],[2,3],[3,1]]
// Output: [1,2,3]
/**
 * @param {number} n
 * @param {number[][]} paths
 * @return {number[]}
 */
var gardenNoAdj = function (n, paths) {
  const gardenMap = new Map();

  for (let i = 1; i <= n; i++) {
    addNode(i, gardenMap);
  }

  paths.forEach((path) => {
    const [origin, destination] = path;
    addEdge(origin, destination, gardenMap);
    addEdge(destination, origin, gardenMap);
  });

  console.log("gardenMap ", gardenMap);

  const ans = Array(n+1).fill(0); 

  for (let i = 1; i <= n; i++) {
    const colorsMap = Array(5).fill(false);
    const connectedGardens = gardenMap.get(i);
    connectedGardens.forEach((garden) => {
      const usedColor = ans[garden];
      colorsMap[usedColor] = true;
    });
    const remainColor = colorsMap.findIndex(
      (value, index) => index > 0 && !value
    );
    ans[i] = remainColor;
    console.log("i ", i);
    console.log("colorsMap ", colorsMap);
    console.log("connectedGardens ", connectedGardens);
    console.log("remainColor ", remainColor);
    console.log("ans ", ans);
  }
  const [_first, ...others] = ans;
  return others;
};

function addNode(node, map) {
  map.set(node, []);
}

function addEdge(origin, destination, map) {
  map.get(origin).push(destination);
}

// const n = 4;
// const paths = [
//   [1, 2],
//   [3, 4],
// ];


const n = 3
const paths = [[1,2],[2,3],[3,1]];

console.log(gardenNoAdj(n, paths));
