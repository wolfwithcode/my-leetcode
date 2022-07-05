// Input: n = 3, paths = [[1,2],[2,3],[3,1]]
// Output: [1,2,3]
/**
 * @param {number} n
 * @param {number[][]} paths
 * @return {number[]}
 */
var gardenNoAdj = function (n, paths) {};

const gardenMap = new Map();

function addNode(node, map) {
  map.set(node, []);
}

function addEdge(origin, destination, map) {
  map.get(origin).push(destination);
}

const n = 4;
const paths = [[1,2],[3,4]];

for (let i = 1; i <= n; i++) {
  addNode(i, gardenMap);
}

paths.forEach((path) => {
  const [origin, destination] = path;
  addEdge(origin, destination, gardenMap);
  addEdge(destination, origin, gardenMap);
});

console.log("gardenMap ", gardenMap);
