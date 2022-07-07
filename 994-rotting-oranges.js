/**
 * @param {number[][]} grid
 * @return {number}
 */
var orangesRotting = function (grid) {
  const graphOranges = new Map();

  const maxIndexOfRows = grid.length - 1;
  const maxIndexOfColumns = grid[0].length - 1;
  const rottenOranges = [];
  grid.forEach((row, rowIndex) => {
    row.forEach((cell, cellIndex) => {
      const key = `${rowIndex},${cellIndex}`;
      addNode(key, cell, graphOranges);
      if (cell === 2) rottenOranges.push(key);

      if (cellIndex + 1 <= maxIndexOfColumns) {
        const key1 = `${rowIndex},${cellIndex + 1}`;
        addEdge(key, key1, graphOranges);
      }
      if (cellIndex - 1 >= 0) {
        const key2 = `${rowIndex},${cellIndex - 1}`;
        addEdge(key, key2, graphOranges);
      }
      if (rowIndex + 1 <= maxIndexOfRows) {
        const key3 = `${rowIndex + 1},${cellIndex}`;
        addEdge(key, key3, graphOranges);
      }
      if (rowIndex - 1 >= 0) {
        const key4 = `${rowIndex - 1},${cellIndex}`;
        addEdge(key, key4, graphOranges);
      }
    });
  });
  console.log("map ", graphOranges);
  console.log("rottenOranges ", rottenOranges);
  bfs(rottenOranges, graphOranges);
};

function addNode(node, value, map) {
  const destinations = [];
  map.set(node, { value, destinations });
}

function setNode(node, newValue, map) {
  const { destinations } = map.get(node);
  map.set(node, { value: newValue, destinations });
}

function addEdge(origin, destination, map) {
  const { destinations } = map.get(origin);
  destinations.push(destination);
}

const grid = [
  [2, 1, 1],
  [0, 1, 1],
  [1, 0, 1],
];
orangesRotting(grid);

function bfs(startRottenOranges, graphOranges) {
  let numberOfMinutes = 0;
  let rottenOranges = startRottenOranges;
  while (rottenOranges.length > 0) {   
    const newRottenOranges = [];
    rottenOranges.forEach((orange) => {
      const { destinations } = graphOranges.get(orange);
      for (const destination of destinations) {
        if (graphOranges.get(destination).value === 1) {
          console.log("found it! fresh orange ", destination);
          setNode(destination, 2, graphOranges);
          newRottenOranges.push(destination);
        }
      }
    });
    rottenOranges = newRottenOranges;
    if (newRottenOranges.length) numberOfMinutes++;
    console.log("newRottenOranges ", newRottenOranges);
    console.log("numberOfMinutes ", numberOfMinutes);
  }
  console.log("graphOranges ", graphOranges);
}
