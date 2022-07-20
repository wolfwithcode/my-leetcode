/**
 * @param {number[][]} times
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
function dijkstra(graph, startVertex) {
  const distances = {};
  const visitedVertices = {};
  const previousVertices = {};
  const queue = [];
  graph.forEach((value, key, map) => {
    // console.log({value, key});
    distances[key] = Infinity;
    previousVertices[key] = null;
  });
  distances[startVertex] = 0;
  queue.push(startVertex);
  // console.log("queue ", queue);
  const poll = (queue) => {
    let minDistance = Infinity;
    let closestVertex = null;
    let closestVertexIndex = null;
    queue.forEach((element, index) => {
      if (distances[element] < minDistance) {
        minDistance = distances[element];
        closestVertex = element;
        closestVertexIndex = index;
      }
    });
    queue.splice(closestVertexIndex, 1);
    return closestVertex;
  };
  while (queue.length > 0) {
    //fetch next closest vertex
    const currentVertex = poll(queue);
    // console.log({currentVertex, queue});
    if (visitedVertices[currentVertex]) continue;
    visitedVertices[currentVertex] = true;
    const neighborNodes = graph.get(currentVertex);
    neighborNodes.forEach((neighborNode) => {
      const { neighbor, distance } = neighborNode;
      if (visitedVertices[neighbor]) return;
      const edgeWeight = distance;
      const existingDistanceToNeighbor = distances[neighbor];
      const distanceToNeighborFromCurrent =
        distances[currentVertex] + edgeWeight;
      if (distanceToNeighborFromCurrent < existingDistanceToNeighbor) {
        distances[neighbor] = distanceToNeighborFromCurrent;
        previousVertices[neighbor] = currentVertex;
        queue.push(neighbor);
      }
    });
  }
  return { distances, previousVertices };
}
var networkDelayTime = function (times, n, k) {
  const graph = new Map();
  const addNode = (node) => {
    graph.set(node, []);
  };
  const addEdge = (vertext, neighbor, distance) => {
    const vertextNode = graph.get(vertext);
    vertextNode.push({ neighbor, distance });
  };
  for (let i = 1; i <= n; i++) {
    addNode(i);
  }
  times.forEach((time) => {
    const [origin, destination, weight] = time;
    addEdge(origin, destination, weight);
  });
  console.log("graph ", graph);
  const { distances, previousVertices } = dijkstra(graph, k);
  console.log({ distances, previousVertices });
  const minimumTime = Math.max(...Object.values(distances));
  return minimumTime === Infinity ? -1 : minimumTime;
};
