const readline = require("readline-sync");

const students = [
  "Clarence Jordan",
  "Christopher Cerritos",
  "Lesly L",
  "Wilfredo Contreras",
  " Biniam Kahsay",
  " Italy Gonzalez",
  "Alec Philavong",
  "Rohon Pokwal",
  "Katalina Caldera",
  "Adriana Kendricks",
  "Destiny Gilbert",
  "Yvette Rodeo",
  "Daniel Hernandez",
  "Isaac Rodriguez",
  "Wilfredo Contreras",
  "Ivan Alonzo",
  " Yedidah Augustine",
];
// Picks random number then rounds it down (gets rid of decimal so it can be a whole number index) and from index 0 - the length of the array
//students value of index is assigned to  randomStudent
let randomStudent = students[Math.floor(Math.random() * students.length)];
console.log(randomStudent);

function keepGoingPlease() {
  try {
    const keepGoing = readline.question("N to stop y to keep going :  ");
    if (keepGoing.toLowerCase() === "y") {
      console.log(randomStudent);
      randomStudent = students[Math.floor(Math.random() * students.length)];
      keepGoingPlease();
    } else if (keepGoing.toLowerCase() === "n") {
      return 0;
    } else {
      console.log("Please try again enter y or n: ");
      keepGoingPlease();
    }
  } catch (e) {
    console.log(`Enter  ${e}  valid stuff please y or n and try again: `);
    keepGoingPlease();
  }
}

keepGoingPlease();
