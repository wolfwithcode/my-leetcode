/**
 * @param {number} n
 * @param {number[][]} flights
 * @param {number} source
 * @param {number} target
 * @param {number} k
 * @return {number}
 */
function dijkstra(graph, source, target, k) {
  const distances = {};
  // const visistedVertices = {};
  const previousVertices = {};
  const stops = {};
  const queue = [];
  graph.forEach((_value, key, map) => {
    distances[key] = Infinity;
    previousVertices[key] = null;
    stops[key] = 0;
  });
  distances[source] = 0;
  stops[source] = 0;
  queue.push({ curDist: 0, curNode: source, curStops: 0 });
  while (queue.length > 0) {
    // const { curNode, curDist, curStops } = poll(queue);
    queue.sort((a, b) => a.curDist - b.curDist);
    console.log({ queue });
    console.log("distances ", distances);
    console.log("previousVertices ", previousVertices);
    console.log("stops ", stops);
    const { curNode, curDist, curStops } = queue.shift();
    console.log({ curNode, curDist, curStops });
    if (curNode === target) return curDist;
    if (curStops === k + 1) continue;
    const neighborNodes = graph.get(curNode);
    neighborNodes.forEach((neighborNode) => {
      const { neighbor, distance } = neighborNode;
      console.log("neighbor ", neighbor);
      console.log("distances[neighbor] ", distances[neighbor]);
      // console.log("curNode ", curNode);
      // console.log("curDist ", curDist);
      // console.log("distance ", distance);
      // console.log("stops ", stops);
      const nextDist = curDist + distance;
      const nextStops = curStops + 1;
      console.log(`nextDist `, nextDist);
      if (nextDist < distances[neighbor]) {
        console.log(`nextDist < distances[neighbor]`);
        distances[neighbor] = nextDist;
        previousVertices[neighbor] = curNode;
        stops[neighbor] = nextStops;
        queue.push({
          curDist: nextDist,
          curNode: neighbor,
          curStops: nextStops,
        });
      } else if (nextStops < stops[neighbor]) {
        console.log("nextStops < stops[neighbor]");
        // stops[neighbor] = nextStops;
        queue.push({
          curDist: nextDist,
          curNode: neighbor,
          curStops: nextStops,
        });
      }
    });
  }
  return -1;
}

var findCheapestPrice = function (n, flights, src, dst, k) {
  const graph = new Map();
  const addNode = (node) => {
    graph.set(node, []);
  };
  const addEdge = (vertex, neighbor, distance) => {
    const vertexNode = graph.get(vertex);
    vertexNode.push({ neighbor, distance });
  };
  for (let i = 0; i < n; i++) {
    addNode(i);
  }
  flights.forEach((flight) => {
    const [from, to, price] = flight;
    addEdge(from, to, price);
  });
  console.log(graph);
  return dijkstra(graph, src, dst, k);
  // //console.log({ distances, previousVertices, stops });
  // const dst_distance = distances[dst];
  // return dst_distance === Infinity ? -1 : dst_distance;
};

/**
 * @param {number} n
 * @param {number[][]} flights
 * @param {number} src
 * @param {number} dst
 * @param {number} k
 * @return {number}
 */
const n = 9;
const flights = [
  [0, 1, 1],
  [1, 2, 1],
  [2, 3, 1],
  [3, 7, 1],
  [0, 4, 3],
  [4, 5, 3],
  [5, 7, 3],
  [0, 6, 5],
  [6, 7, 100],
  [7, 8, 1],
];
const src = 0;
const dst = 8;
const k = 3;
const result = findCheapestPrice(n, flights, src, dst, k);
console.log({ result });
