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

function checkDecimal() {
  return inputDisplay.textContent.includes(".");
}

function round(value, decimals) {
  return Number(Math.round(value + "e" + decimals) + "e-" + decimals);
}

function solve() {
  if (!checkFirstNumber() || !checkSecondNumber()) {
    resultDisplay.textContent = "Syntax Error";
    firstNumber = null;
    operator = null;
    secondNumber = null;
    result = null;
    inputDisplay.textContent = null;
  } else if (operator == "/" && secondNumber == 0) {
    resultDisplay.textContent = "Syntax Error";
  } else {
    result = operate(operator, firstNumber, secondNumber);
    resultDisplay.textContent = round(result, 2);
    console.log(`${firstNumber} ${operator} ${secondNumber} = ${result}`);
    firstNumber = null;
    secondNumber = null;
    inputDisplay.textContent = null;
  }
}

let firstNumber = null;
let operator = null;
let secondNumber = null;
let result = null;

const inputDisplay = document.querySelector(".input");
const resultDisplay = document.querySelector(".result");

const numbers = document.querySelectorAll(".numbers");
numbers.forEach((number) => {
  number.addEventListener("click", () => {
    if (number.textContent == ".") {
      if (!checkDecimal()) {
        inputDisplay.textContent += number.textContent;
      }
    } else {
      inputDisplay.textContent += number.textContent;
    }
  });
});

const clear = document.querySelector("#clear");
clear.addEventListener("click", () => {
  firstNumber = null;
  operator = null;
  secondNumber = null;
  result = null;
  inputDisplay.textContent = null;
  resultDisplay.textContent = null;
});

const operations = document.querySelectorAll(".operations");
operations.forEach((element) => {
  element.addEventListener("click", () => {
    if (checkFirstNumber()) {
      secondNumber = inputDisplay.textContent;
    } else {
      firstNumber = inputDisplay.textContent;
    }
    if (checkFirstNumber() && checkSecondNumber()) {
      solve();
    }
    if (!checkFirstNumber()) {
      firstNumber = result;
    }
    operator = element.textContent;
    inputDisplay.textContent = null;
    console.log(`${firstNumber} ${operator} ${secondNumber} = ${result}`);
  });
});

const equals = document.querySelector("#equals");
equals.addEventListener("click", () => {
  secondNumber = inputDisplay.textContent;
  solve();
});

const backspace = document.querySelector("#backspace");
backspace.addEventListener("click", () => {
  inputDisplay.textContent = inputDisplay.textContent.substring(
    0,
    inputDisplay.textContent.length - 1
  );
});

const decimal = document.querySelector("#decimal");

window.addEventListener(
  "keydown",
  function (event) {
    if (event.defaultPrevented) {
      return; // Do nothing if the event was already processed
    }

    if (event.key in numbers) {
      animate(document.querySelector(`#num${event.key}`));
      inputDisplay.textContent += event.key;
    }

    switch (event.key) {
      case "+":
        animate(document.querySelector("#add"));
        if (checkFirstNumber()) {
          secondNumber = inputDisplay.textContent;
        } else {
          firstNumber = inputDisplay.textContent;
        }
        if (checkFirstNumber() && checkSecondNumber()) {
          solve();
        }
        if (!checkFirstNumber()) {
          firstNumber = result;
        }
        operator = event.key;
        inputDisplay.textContent = null;
        console.log(`${firstNumber} ${operator} ${secondNumber} = ${result}`);
        break;
      case "-":
        animate(document.querySelector("#subtract"));
        if (checkFirstNumber()) {
          secondNumber = inputDisplay.textContent;
        } else {
          firstNumber = inputDisplay.textContent;
        }
        if (checkFirstNumber() && checkSecondNumber()) {
          solve();
        }
        if (!checkFirstNumber()) {
          firstNumber = result;
        }
        operator = event.key;
        inputDisplay.textContent = null;
        console.log(`${firstNumber} ${operator} ${secondNumber} = ${result}`);
        break;
      case "*":
        animate(document.querySelector("#multiply"));
        if (checkFirstNumber()) {
          secondNumber = inputDisplay.textContent;
        } else {
          firstNumber = inputDisplay.textContent;
        }
        if (checkFirstNumber() && checkSecondNumber()) {
          solve();
        }
        if (!checkFirstNumber()) {
          firstNumber = result;
        }
        operator = event.key;
        inputDisplay.textContent = null;
        console.log(`${firstNumber} ${operator} ${secondNumber} = ${result}`);
        break;
      case "/":
        animate(document.querySelector("#divide"));
        if (checkFirstNumber()) {
          secondNumber = inputDisplay.textContent;
        } else {
          firstNumber = inputDisplay.textContent;
        }
        if (checkFirstNumber() && checkSecondNumber()) {
          solve();
        }
        if (!checkFirstNumber()) {
          firstNumber = result;
        }
        operator = event.key;
        inputDisplay.textContent = null;
        console.log(`${firstNumber} ${operator} ${secondNumber} = ${result}`);
        break;
      case ".":
        animate(decimal);
        if (!checkDecimal(decimal)) {
          inputDisplay.textContent += ".";
        }
        break;
      case "Enter":
        animate(equals);
        if (!checkFirstNumber() && !checkOperator()) {
          break;
        }
        if (checkFirstNumber()) {
          secondNumber = inputDisplay.textContent;
        }
        if (checkFirstNumber() && checkSecondNumber()) {
          solve();
        }
        if (!checkFirstNumber()) {
          firstNumber = result;
        }
        inputDisplay.textContent = null;
        console.log(`${firstNumber} ${operator} ${secondNumber} = ${result}`);
        break;
      case "Backspace":
        animate(backspace);
        inputDisplay.textContent = inputDisplay.textContent.substring(
          0,
          inputDisplay.textContent.length - 1
        );
        break;
      case "Escape":
        animate(clear);
        firstNumber = null;
        operator = null;
        secondNumber = null;
        result = null;
        inputDisplay.textContent = null;
        resultDisplay.textContent = null;
        break;
      case "Delete":
        animate(clear);
        firstNumber = null;
        operator = null;
        secondNumber = null;
        result = null;
        inputDisplay.textContent = null;
        resultDisplay.textContent = null;
        break;
      default:
        return;
    }

    // Cancel the default action to avoid it being handled twice
    event.preventDefault();
  },
  true
);

function animate(element) {
  element.classList.remove("run-animation");
  void element.offsetWidth;
  element.classList.add("run-animation");
}
