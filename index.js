function add(a, b) {
    return a + b
}

function subtract(a, b) {
    return a - b
}

function multiply(a, b) {
    return a * b
}

function divide(a, b) {
    return a / b
}

function operate(operator, a, b) {
    switch (operator) {
        case '+':
            console.log(add(a, b))
            break;
        case '-':
            console.log(subtract(a, b))
            break;
        case '*':
            console.log(multiply(a, b))
            break;
        case '/':
            console.log(divide(a, b))
            break;
        default:
            console.log('Ok')
    }
}

operate('+', 10, 5)
operate('-', 10, 5)
operate('*', 10, 5)
operate('/', 10, 5)

// Display
const display = document.querySelector('.display');
let displayValue = display.textContent
// Symbol Buttons
const clearBtn = document.querySelector('#clear a');
const openParenthesisBtn = document.querySelector('#open-parenthesis a');
const closeParenthesisBtn = document.querySelector('#close-parenthesis a');
const squareRootBtn = document.querySelector('#square-root a');
const percentBtn = document.querySelector('#percent a');
const plusMinusBtn = document.querySelector('#plus-minus a');
clearBtn.addEventListener('click', () => {
    display.textContent = ''
});
openParenthesisBtn.addEventListener('click', () => {
    display.textContent += openParenthesisBtn.textContent
});
closeParenthesisBtn.addEventListener('click', () => {
    display.textContent += closeParenthesisBtn.textContent
});
squareRootBtn.addEventListener('click', () => {
    display.textContent += squareRootBtn.textContent
});
percentBtn.addEventListener('click', () => {
    display.textContent += percentBtn.textContent
});
plusMinusBtn.addEventListener('click', () => {
    display.textContent += plusMinusBtn.textContent
});
// Number Buttons
const number7Btn = document.querySelector('#number7 a');
const number8Btn = document.querySelector('#number8 a');
const number9Btn = document.querySelector('#number9 a');
const number4Btn = document.querySelector('#number4 a');
const number5Btn = document.querySelector('#number5 a');
const number6Btn = document.querySelector('#number6 a');
const number1Btn = document.querySelector('#number1 a');
const number2Btn = document.querySelector('#number2 a');
const number3Btn = document.querySelector('#number3 a');
const decimalPointBtn = document.querySelector('#decimal-point a');
const number0Btn = document.querySelector('#number0 a');
const backspaceBtn = document.querySelector('#backspace a');
number7Btn.addEventListener('click', () => {
    display.textContent += number7Btn.textContent
});
number8Btn.addEventListener('click', () => {
    display.textContent += number8Btn.textContent
});
number9Btn.addEventListener('click', () => {
    display.textContent += number9Btn.textContent
});
number4Btn.addEventListener('click', () => {
    display.textContent += number4Btn.textContent
});
number5Btn.addEventListener('click', () => {
    display.textContent += number5Btn.textContent
});
number6Btn.addEventListener('click', () => {
    display.textContent += number6Btn.textContent
});
number1Btn.addEventListener('click', () => {
    display.textContent += number1Btn.textContent
});
number2Btn.addEventListener('click', () => {
    display.textContent += number2Btn.textContent
});
number3Btn.addEventListener('click', () => {
    display.textContent += number3Btn.textContent
});
decimalPointBtn.addEventListener('click', () => {
    display.textContent += decimalPointBtn.textContent
});
number0Btn.addEventListener('click', () => {
    display.textContent += number0Btn.textContent
});
backspaceBtn.addEventListener('click', () => {
    display.textContent = display.textContent.substring(0, display.textContent.length - 1)
});
// Operator Buttons
const multiplyBtn = document.querySelector('#multiply a');
const divideBtn = document.querySelector('#divide a');
const minuesBtn = document.querySelector('#minus a');
const plusBtn = document.querySelector('#plus a');
const equalsBtn = document.querySelector('#equals a');
multiplyBtn.addEventListener('click', () => {
    display.textContent += multiplyBtn.textContent
});
divideBtn.addEventListener('click', () => {
    display.textContent += divideBtn.textContent
});
minuesBtn.addEventListener('click', () => {
    display.textContent += minuesBtn.textContent
});
plusBtn.addEventListener('click', () => {
    display.textContent += plusBtn.textContent
});
equalsBtn.addEventListener('click', () => {
    display.textContent += equalsBtn.textContent.trim()
});