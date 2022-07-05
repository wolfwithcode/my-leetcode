/**
 * @param {number} n
 * @param {number[][]} trust
 * @return {number}
 */
// add node
function addNode(person, map) {
  map.set(person, []);
}

// add edge, undirected
function addEdge(origin, destination, map) {
  map.get(origin).push(destination);
}

var findJudge = function (n, trust) {
  // the graph
  const adjacencyList = new Map();
  const adjacencyReservedList = new Map();
  for (let i = 1; i <= n; i++) {
    addNode(i, adjacencyList);
    addNode(i, adjacencyReservedList);
  }
  // create the graph
  trust.forEach((route) => {
    const [personA, personB] = route;
    addEdge(personA, personB, adjacencyList);
    addEdge(personB, personA, adjacencyReservedList);
  });

  //   console.log("adjacencyList ", adjacencyList);
  //   console.log("adjacencyReservedList ", adjacencyReservedList);

  let indexTownJudge = -1;

  for (let i = 1; i <= n; i++) {
    const isTrustNobody = adjacencyList.get(i).length === 0;
    if (!isTrustNobody) continue;
    const isTrustedByEveryOne = adjacencyReservedList.get(i).length === n - 1;
    if (isTrustedByEveryOne) {
      indexTownJudge = i;
      break;
    }
  }
  return indexTownJudge;
};

const n = 3;
const trust = [
  [1, 3],
  [2, 3],
  [3, 1],
];
console.log(findJudge(n, trust));
