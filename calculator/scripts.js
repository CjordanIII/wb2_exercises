console.log("hello world");

window.onload = init;

function init() {
  const addButton = document.querySelector("#addButton");
  const subtractButton = document.querySelector("#subtractButton");
  const multiplyButton = document.querySelector("#multiplyButton");
  const divideButton = document.querySelector("#divideButton");
  const clearButton = document.querySelector("#clearButton");

  addButton.addEventListener("click", add);
  subtractButton.addEventListener("click", subtract);
  multiplyButton.addEventListener("click", divide);
  divideButton.addEventListener("click", multiply);
  clearButton.addEventListener("click", clear);
}

function add() {
  const number1 = document.querySelector("#number1Feild").value;
  const number2 = document.querySelector("#number2Feild").value;
  const sum = parseFloat(number1) + parseFloat(number2);
  document.querySelector("#answerField").value = sum;
}
function subtract() {
  const number1 = document.querySelector("#number1Feild").value;
  const number2 = document.querySelector("#number2Feild").value;
  const sum = parseFloat(number1) - parseFloat(number2);
  document.querySelector("#answerField").value = sum;
}
function divide() {
  const number1 = document.querySelector("#number1Feild").value;
  const number2 = document.querySelector("#number2Feild").value;
  const sum = parseFloat(number1) / parseFloat(number2);
  document.querySelector("#answerField").value = sum;
}

function multiply() {
  const number1 = document.querySelector("#number1Feild").value;
  const number2 = document.querySelector("#number2Feild").value;
  const sum = parseFloat(number1) * parseFloat(number2);
  document.querySelector("#answerField").value = sum;
}
function clear() {
  let number1 = document.querySelector("#number1Feild");
  let number2 = document.querySelector("#number2Feild");
  number1.value = "";
  number2.value = "";
  const sum = "";
  document.querySelector("#answerField").value = sum;
}
