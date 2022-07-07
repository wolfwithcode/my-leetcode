/**
 * @param {number[][]} grid
 * @return {number}
 */
 var orangesRotting = function(grid) {
    const map = new Map();
    const maxIndexOfRows = grid.length-1;
    const maxIndexOfColumns = grid[0].length-1;
    const rottenOranges = [];
    const emptyCells = [];
    grid.forEach((row, rowIndex) => {
        row.forEach((cell, cellIndex) => {
            const key= `${rowIndex},${cellIndex}`;
            addNode(key,cell,map);
            if(cell===2) rottenOranges.push(cell);
            if(cell===0) emptyCells.push(cell);
            if(cellIndex+1 <= maxIndexOfColumns){
                const key1= `${rowIndex},${cellIndex+1}`;
                addEdge(key, key1,map);
            }
            if(cellIndex-1 >= 0){
                const key2= `${rowIndex},${cellIndex-1}`;
                addEdge(key, key2,map);
            }
            if(rowIndex+1 <= maxIndexOfRows){
                const key3= `${rowIndex+1},${cellIndex}`;
                addEdge(key, key3,map);
            }
            if(rowIndex-1 >= 0){
                const key4= `${rowIndex-1},${cellIndex}`;
                addEdge(key, key4,map);
            }
                        
        })
    });
    console.log("map ", map);
    console.log("rottenOranges ", rottenOranges);
    console.log("rottenOranges ", rottenOranges);
};


function addNode(node,value, map){
    const destinations = []
    map.set(node, {value, destinations});
}

function addEdge(origin, destination, map){
    const {destinations} = map.get(origin);
    destinations.push(destination);
}

const grid = [[2,1,1],[0,1,1],[1,0,1]];
orangesRotting(grid);