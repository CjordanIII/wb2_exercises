const readline = require("readline-sync");

const liabilities = readline.question("what are you liabilities: ");
const assets = readline.question("What are your assets: ");

const net_worth = assets - liabilities;

console.log(`your net worth: ${net_worth}`);
