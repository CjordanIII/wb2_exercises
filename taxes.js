const readline = require("readline-sync");

const withHoldTaxes = () => {
  try {
    const userIncome = parseFloat(
      readline.question("How much do you make a month?: ")
    );

    if (!isNaN(userIncome)) {
      const tax = 0.23;
      const totalDue = userIncome * tax;
      console.log(`The total due is ${totalDue}`);
    } else {
      console.log("Please enter a valid number");
      withHoldTaxes();
    }
    const quit = readline.question("quit?: ");
    if (quit.toLowerCase() === "yes") {
      // base case
      return 0;
    } else {
      withHoldTaxes();
    }
  } catch (error) {
    console.log(error);
    withHoldTaxes();
  }
};
withHoldTaxes();
