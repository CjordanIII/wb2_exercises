const a = " 101.1 ";
const b = "55";
const c = "402 Stevens";
const d = "Number 5  ";

const arr = [a, b, c, d];

function name(params) {
  console.log(params);
  let num = parseInt(params);
  console.log("parse Integer: " + num);
  num = parseFloat(params);
  console.log("parse Float: " + num);
  num = Number(params);
  console.log("Number: " + num);
  num = +params;
  console.log("Unary: " + num);

  console.log("<===========================>");
}

let i;
for (i = 0; i < arr.length; i++) {
  name(arr[i]);
}
