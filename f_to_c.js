const readline = require("readline-sync");

const fahrenheitToCelsius = () => {
  try {
    const fahrenheit = parseFloat(
      readline.question("Enter temperature to convert to celcius: ")
    );

    if (!isNaN(fahrenheit)) {
      const convert = (5 / 9) * (fahrenheit - 32);
      console.log(`fahrenheit to cel: ${convert}`);
    } else {
      console.log("Please enter a number");
    }

    const shouldquit = readline.question("quit?:");

    if (shouldquit.toLowerCase() === "yes") {
      // base case
      return 0;
    } else {
      fahrenheitToCelsius();
    }
  } catch (e) {
    console.log(e);
    fahrenheitToCelsius();
  }
};

fahrenheitToCelsius();
