import mazeRunner from "./solution.js";

const maze = [
  [1, 1, 1, 1, 1, 1, 1],
  [1, 0, 0, 0, 0, 0, 3],
  [1, 0, 1, 0, 1, 0, 1],
  [0, 0, 1, 0, 0, 0, 1],
  [1, 0, 1, 0, 1, 0, 1],
  [1, 0, 0, 0, 0, 0, 1],
  [1, 2, 1, 0, 1, 0, 1],
];

console.log(
  mazeRunner(maze, ["N", "N", "N", "N", "N", "E", "E", "E", "E", "E"])
); // Finish
console.log(mazeRunner(maze, ["N", "N", "N", "W", "W"])); // Dead
console.log(mazeRunner(maze, ["N", "E", "E", "E", "E"])); // Lost
console.log(
  mazeRunner(maze, ["N", "N", "N", "N", "N", "E", "E", "S", "S", "S", "S", "S"])
); // Lost
