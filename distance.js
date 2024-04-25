//  d=√((x2 – x1)² + (y2 – y1)²)
const readline = require("readline-sync");

const pointDistance = () => {
  try {
    const x1 = parseFloat(readline.question("Enter x1: "));
    const x2 = parseFloat(readline.question("Enter x2: "));
    const y1 = parseFloat(readline.question("Enter y1: "));
    const y2 = parseFloat(readline.question("Enter y2: "));

    if (!isNaN(x1) && !isNaN(x2) && !isNaN(y1) && !isNaN(y2)) {
      const distance = Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));
      console.log(`the distance between two point: ${distance}`);
    } else {
      console.log("Please enter a valid number");
      pointDistance();
    }
    const quit = readline.question("quit: ");
    if (quit.toLowerCase() === "yes") {
      return 0;
    } else {
      pointDistance();
    }
  } catch (error) {
    console.log(error);
    pointDistance();
  }
};

pointDistance();
