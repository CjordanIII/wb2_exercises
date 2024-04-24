const readline = require("readline-sync");

try {
  const foodCost = parseInt(readline.question("Cost of your meal: "));
  const tip = parseFloat(
    readline.question("What is your tip in decimal format: ")
  );

  if (!isNaN(foodCost) && !isNaN(tip)) {
    const tax = 6.54;
    const totalDue = foodCost + tax + foodCost * tip;
    console.log(`The total due is ${totalDue}`);
  } else {
    throw new Error("Please enter valid numbers.");
  }
} catch (error) {
  console.error(error.message);
}
