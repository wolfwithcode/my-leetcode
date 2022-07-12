/**
 * @param {character[][]} grid
 * @return {number}
 */
const grid = [
  ["1", "1", "0", "0", "0"],
  ["1", "1", "0", "0", "0"],
  ["0", "0", "1", "0", "0"],
  ["0", "0", "0", "1", "1"],
];

var numIslands = function (grid) {
  const map = new Map();
  const addNode = (node, island) => {
    const isLandIndex = 0;
    const destinations = [];
    map.set(node, { isLandIndex, island, destinations });
  };
  const setNode = (node, newIsLandIndex) => {
    console.log("newIsLandIndex ", newIsLandIndex);
    const originNode = map.get(node);
    originNode.isLandIndex = newIsLandIndex;
  };
  const addEdge = (origin, destination) => {
    const originNode = map.get(origin);
    originNode.destinations.push(destination);
  };
  console.log("grid ", grid);
  const maxIndexOfRows = grid.length - 1;
  const maxIndexOfColumns = grid[0].length - 1;
  const isLandList = [];
  grid.forEach((row, indexOfRow) => {
    row.forEach((cell, indexOfCol) => {
      const key = `${indexOfRow},${indexOfCol}`;
      const island = cell === "1";
      if (island) isLandList.push(key);
      addNode(key, island);
      if (indexOfCol + 1 <= maxIndexOfColumns) {
        const key1 = `${indexOfRow},${indexOfCol + 1}`;
        addEdge(key, key1);
      }
      if (indexOfCol - 1 >= 0) {
        const key2 = `${indexOfRow},${indexOfCol - 1}`;
        addEdge(key, key2);
      }
      if (indexOfRow + 1 <= maxIndexOfRows) {
        const key3 = `${indexOfRow + 1},${indexOfCol}`;
        addEdge(key, key3);
      }
      if (indexOfRow - 1 >= 0) {
        const key4 = `${indexOfRow - 1},${indexOfCol}`;
        addEdge(key, key4);
      }
    });
  });
  const visitedNodes = new Set();
  const bfs = (start, newIsLandIndex) => {
    
    const queue = [start];   
    setNode(start, newIsLandIndex);
    visitedNodes.add(start);
    while (queue.length > 0) {
      const node = queue.shift();
      let { destinations, island } = map.get(node);
      if (!island) continue;
      destinations.forEach((destination) => {
        if (!visitedNodes.has(destination)) {
          setNode(destination, newIsLandIndex);
          visitedNodes.add(destination);
          queue.push(destination);
        }
      });
    }
  };

  console.log("map before", map);
  if (!isLandList.length) return 0;
  let count = 0;
  isLandList.forEach((node) => {
    let { isLandIndex, island } = map.get(node);
    if (isLandIndex || !island || visitedNodes.has(node)) return;
    count++;
    console.log(" count ", count);
    bfs(node, count);
  });

  //   bfs(firstIsland);
//   console.log("map after", map);
  return count;
};

numIslands(grid);
