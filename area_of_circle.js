readline = require("readline-sync");

const radius = readline.question("Give me a radius and I'll give you radius: ");

const area = Math.PI * Math.pow(radius, 2);

console.log(`the area is ${area}`);
