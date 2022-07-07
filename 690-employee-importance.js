/**
 * Definition for Employee.
 * function Employee(id, importance, subordinates) {
 *     this.id = id;
 *     this.importance = importance;
 *     this.subordinates = subordinates;
 * }
 */

/**
 * @param {Employee[]} employees
 * @param {number} id
 * @return {number}
 */
var GetImportance = function (employees, id) {
  const employeesMap = new Map();
  const employeeImportanceMap = Array(employees.length + 1).fill(0);
  employees.forEach((employee) => {
    const origin = employee.id;
    employeeImportanceMap[origin] = employee.importance;
    addNode(origin, employeesMap);
    const destinations = employee.subordinates;
    destinations.forEach((destination) => {
      addEdge(origin, destination, employeesMap);
    });
  });

    console.log("employees ", employees);
    console.log("employeesMap ", employeesMap);
    console.log("employeeImportanceMap ", employeeImportanceMap);

  const totalImportanceValue = dfs(id, employeesMap, employeeImportanceMap);
  //   console.log("newtotalImportanceValue ", newtotalImportanceValue);
  //   console.log("totalImportanceValue ", totalImportanceValue);
  return totalImportanceValue;
};

function addNode(node, map) {
  map.set(node, []);
}

function addEdge(origin, destination, map) {
  map.get(origin).push(destination);
}

function dfs(current, map, employeeImportanceMap) {
  const destinations = map.get(current);
  let result = employeeImportanceMap[current];
  if (destinations.length === 0) {
    //   console.log("found it! airport", current);
    //   console.log("found it! result", result);
    return result;
  }

  for (const destination of destinations) {
    // console.log("destination ", destination);
    result += dfs(destination, map, employeeImportanceMap);
  }
  return result;
}

// Input: employees = [[1,2,[5]],[5,-3,[]]], id = 5
// Output: -3
// Explanation: Employee 5 has an importance value of -3 and has no direct subordinates.
// Thus, the total importance value of employee 5 is -3.
const employees = [
  { id: 1, importance: 2, subordinates: [5] },
  { id: 5, importance: -3, subordinates: [] },
];
const id = 5;

console.log(GetImportance(employees, id));

// function bfs(root,start, map) {
//   const visited = new Set();
//   const queue = [start];
//   while (queue.length > 0) {
//     const airport = queue.shift();
//     const destinations = map.get(airport);
//     if (destinations.length === 0) {
//       console.log("found it! airport", airport);
//       continue;
//     }
//     for (const destination of destinations) {
//       //   if (destination == id) {
//       //     console.log("found it!");
//       //   }
//       if (!visited.has(destination)) {
//         visited.add(destination);
//         queue.push(destination);
//         console.log("destination ", destination);
//       }
//     }
//   }
// }
