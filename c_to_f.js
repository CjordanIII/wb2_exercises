const readline = require("readline-sync");

const celsiusToFahrenheit = () => {
  try {
    const celsius = parseFloat(
      readline.question("Enter temperature to convert to fahrenheit: ")
    );

    if (!isNaN(celsius)) {
      const convert = (5 / 9) * celsius + 32;
      console.log(`celsius to fah: ${convert}`);
    } else {
      console.log("Please enter a number");
    }

    const shouldquit = readline.question("quit?:");

    if (shouldquit.toLowerCase() === "yes") {
      // base case
      return 0;
    } else {
      celsiusToFahrenheit();
    }
  } catch (e) {
    console.log(e);
    celsiusToFahrenheit();
  }
};

celsiusToFahrenheit();
