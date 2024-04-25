const readline = require("readline-sync");

function payRules() {
  try {
    let payRate = parseFloat(readline.question("pay rate per hour: "));
    const hoursWorked = parseFloat(readline.question("hours worked:"));
    let totalComp;
    // check if number is valid
    if (!isNaN(payRate) && !isNaN(hoursWorked)) {
      if (hoursWorked > 40) {
        payRate = payRate * 1.5; // todo fix later

        totalComp = payRate * hoursWorked;
        console.log("total Comp: " + totalComp.toFixed(2));
        // breaks out of the function to avoid loop
        return 0;
      } else {
        totalComp = payRate * hoursWorked;
        console.log("total Comp: " + totalComp.toFixed(2));
        // breaks out of the function to avoid loop
        return 0;
      }
    } else {
      // error handling
      console.log("Enter valid number or remove symbols and try again ");
      payRules();
    }
  } catch (error) {
    console.log(error + " try again");
    payRules();
  }
}
// initialize
payRules();
