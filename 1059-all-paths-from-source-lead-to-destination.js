/**
 * @param {number} n
 * @param {number[][]} edges
 * @param {number} source
 * @param {number} destination
 * @return {boolean}
 */
var leadsToDestination = function (n, edges, source, destination) {
  // console.log(edges);
  const map = new Map();
  const addNode = (node) => {
    const destinations = [];
    map.set(node, destinations);
  };
  const addEdge = (origin, destination) => {
    const node = map.get(origin);
    node.push(destination);
  };
  const dfs = (visitedNodes, sourceNode) => {
    // if(sourceNode === destination) return true;
    const destinations = map.get(sourceNode);
    // console.log("sourceNode ",sourceNode );
    // console.log("visitedNodes ",visitedNodes );
    if (!destinations.length) {
      // console.log("fount it visitedNodes",visitedNodes );
      // console.log("fount it",sourceNode );
      return sourceNode === destination;
    }
    const newVisitedNode = new Set(visitedNodes);
    newVisitedNode.add(sourceNode);
    let result;
    for (let nextNode of destinations) {
      // console.log("nextNode ", nextNode);
      // Cycle Found!!!
      if (visitedNodes.has(nextNode)) return false;
      result = dfs(newVisitedNode, nextNode);
      if (!result) {
        return false;
      }
    }
    return true;
  };
  for (let i = 0; i < n; i++) {
    addNode(i);
  }
  edges.forEach((edge) => {
    const [sourceNode, targetNode] = edge;
    addEdge(sourceNode, targetNode);
  });
  return dfs(new Set(), source);
};
