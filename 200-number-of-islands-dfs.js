/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function (grid) {
  const map = new Map();
  const addNode = (node, isLand) => {
    const indexOfIsland = null;
    const destinations = [];
    map.set(node, { indexOfIsland, isLand, destinations });
  };
  const addEdge = (origin, destination) => {
    const { destinations } = map.get(origin);
    destinations.push(destination);
  };
  const setNode = (node, indexOfIsland) => {
    const originNode = map.get(node);
    Object.assign(originNode, { indexOfIsland });
  };
  const visistedIslands = new Set();
  const dfs = (start, newIndexOfIsland) => {
    const node = map.get(start);
    // console.log("start ",start);
    // console.log("start node", node);
    visistedIslands.add(start);
    if (!node.isLand) {
        console.log("start ",start);
        console.log("start node", node);
       
        return;
    }
    setNode(start, newIndexOfIsland);  
    console.log("node.destinations ", node.destinations);
    node.destinations.forEach((destination) => {     
      if(visistedIslands.has(destination)) return;
      dfs(destination, newIndexOfIsland);
    });
    console.log("visistedIslands ", visistedIslands);
  };
  const maxIndexOfRows = grid.length - 1;
  const maxIndexOfColumns = grid[0].length - 1;
  const isLandList = [];
  grid.forEach((row, indexOfRow) => {
    row.forEach((cell, indexOfColumn) => {
      const key = `${indexOfRow},${indexOfColumn}`;
      addNode(key, cell === "1");
      if (cell === "1") isLandList.push(key);
      if (indexOfColumn - 1 >= 0) {
        const key1 = `${indexOfRow},${indexOfColumn - 1}`;
        addEdge(key, key1);
      }
      if (indexOfColumn + 1 <= maxIndexOfColumns) {
        const key2 = `${indexOfRow},${indexOfColumn + 1}`;
        addEdge(key, key2);
      }
      if (indexOfRow - 1 >= 0) {
        const key3 = `${indexOfRow - 1},${indexOfColumn}`;
        addEdge(key, key3);
      }
      if (indexOfRow + 1 <= maxIndexOfRows) {
        const key4 = `${indexOfRow + 1},${indexOfColumn}`;
        addEdge(key, key4);
      }
    });
  });
  console.log("map before", map);
//   console.log("isLandList ", isLandList);
  let count = 0;
  isLandList.forEach(isLand => {
    const node = map.get(isLand);
    if(node.indexOfIsland) return;
    count++;
    dfs(isLand, count);
  })
  console.log("map after", map);
  return count;
};

const grid = [
    ["1","1","0","0","0"],
    ["1","1","0","0","0"],
    ["0","0","1","0","0"],
    ["0","0","0","1","1"]
  ];
numIslands(grid);
