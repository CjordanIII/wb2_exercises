readline = require("readline-sync");

const length = readline.question("Give me length:  ");
const width = readline.question("Give me width:  ");

const area = l * w;

console.log(`the area off this rectangle is ${area}`);
