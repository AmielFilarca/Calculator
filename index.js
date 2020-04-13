function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  return a / b;
}

function operate(operator, a, b) {
  a = parseFloat(a);
  b = parseFloat(b);
  switch (operator) {
    case "+":
      return add(a, b);
    case "-":
      return subtract(a, b);
    case "*":
      return multiply(a, b);
    case "/":
      return divide(a, b);
    default:
      return "Error";
  }
}

let firstNumber = null;
let operator = null;
let secondNumber = null;
let result = null;

function checkFirstNumber() {
  if (firstNumber) {
    return true;
  } else {
    return false;
  }
}

function checkOperator() {
  if (operator) {
    return true;
  } else {
    return false;
  }
}

function checkSecondNumber() {
  if (secondNumber) {
    return true;
  } else {
    return false;
  }
}

function checkResult() {
  if (result) {
    return true;
  } else {
    return false;
  }
}

function solve() {
  result = operate(operator, firstNumber, secondNumber);
  resultDisplay.textContent = result;
  console.log(firstNumber);
  console.log(operator);
  console.log(secondNumber);
  console.log(result);
  firstNumber = result;
  secondNumber = null;
  inputDisplay.textContent = null;
}

const inputDisplay = document.querySelector(".input");
const resultDisplay = document.querySelector(".result");

const numbers = document.querySelectorAll(".numbers");
numbers.forEach((number) => {
  number.addEventListener("click", () => {
    inputDisplay.textContent += number.textContent;
  });
});

const clear = document.querySelector("#clear");
clear.addEventListener("click", () => {
  firstNumber = null;
  operator = null;
  secondNumber = null;
  inputDisplay.textContent = null;
  resultDisplay.textContent = null;
});

const operations = document.querySelectorAll(".operations");
operations.forEach((element) => {
  element.addEventListener("click", () => {
    firstNumber = inputDisplay.textContent;
    if (!checkFirstNumber()) {
      firstNumber = resultDisplay.textContent;
    }
    switch (element.textContent) {
      case "+":
        operator = element.textContent;
        break;
      case "-":
        operator = element.textContent;
        break;
      case "*":
        operator = element.textContent;
        break;
      case "/":
        operator = element.textContent;
        break;
      default:
        break;
    }
    inputDisplay.textContent = null;
    console.log(firstNumber);
    console.log(operator);
    console.log(secondNumber);
  });
});

const equals = document.querySelector("#equals");
equals.addEventListener("click", () => {
  secondNumber = inputDisplay.textContent;
  solve();
});
