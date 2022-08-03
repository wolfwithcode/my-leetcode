// const fs = require("fs");

// // / require json-2-csv module
// const converter = require("json-2-csv");

// // declare a JSON array
// const todos = [
//   {
//     id: 1,
//     title: "delectus aut autem",
//     completed: false,
//   },
//   {
//     id: 2,
//     title: "quis ut nam facilis et officia qui",
//     completed: false,
//   },
//   {
//     id: 3,
//     title: "fugiat veniam minus",
//     completed: false,
//   },
// ];

// const rooms = [
//   { roomId: "DXTW", roomName: "Deluxe Twin " },
//   { roomId: "JRDL", roomName: "Deluxe Sea View (DSV)" },
//   { roomId: "wnroom", roomName: "Double Bed" },
//   { roomId: "A", roomName: "Prem King (PKPS)" },
// ];

// // // convert JSON array to CSV string
// // converter.json2csv(todos, (err, csv) => {
// //   if (err) {
// //     throw err;
// //   }

// //   // print CSV string
// //   console.log(csv);
// // });

// // convert JSON array to CSV string
// converter.json2csv(rooms, (err, csv) => {
//   if (err) {
//     throw err;
//   }

//   // print CSV string
//   console.log(csv);

//   // write CSV to a file
//   fs.writeFileSync("rooms.csv", csv);
// });

const { uniqBy } = require("lodash");

let arr = [
  { name: "Jen", age: 31, eyecolor: "blue", hair: "brown" },
  { name: "Jen", age: 32, eyecolor: "green", hair: "blonde" },
  { name: "Jules", age: 31, eyecolor: "blue", hair: "brown" },
  { name: "Brian", age: 40, eyecolor: "blue", hair: "brown" },
];

let unique = uniqBy(arr, "name");

console.log(unique);
