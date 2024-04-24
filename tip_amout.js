const readline = require("readline-sync");

const bill = readline.question("What is your bill: ");
const tip = readline.question("Tip decimal:");

const total = bill * tip;

console.log(`The tip on a ${bill} food bill is ${total}`);
