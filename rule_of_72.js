const readline = require("readline-sync");

const intRate = readline.question(
  "What is the interest rate you are hoping to get: "
);

const periodsToDouble = 72 / intRate;

console.log(
  `at ${intRate} interest reate, your savings account will be worth ${periodsToDouble} in double years  `
);
