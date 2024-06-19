let display = document.getElementById('display');
let currentOperator = null;
let currentValue = null;
let newValue = true;

function appendNumber(number) {
    if (newValue) {
        display.value = number;
        newValue = false;
    } else {
        display.value += number;
    }
}

function setOperator(operator) {
    if (currentValue === null) {
        currentValue = parseFloat(display.value);
    } else if (!newValue) {
        calculate();
        currentValue = parseFloat(display.value);
    }
    currentOperator = operator;
    newValue = true;
}

function clearDisplay() {
    display.value = '';
    currentValue = null;
    currentOperator = null;
    newValue = true;
}

function calculate() {
    if (currentOperator === null || newValue) {
        return;
    }
    let result;
    switch (currentOperator) {
        case '+':
            result = currentValue + parseFloat(display.value);
            break;
        case '-':
            result = currentValue - parseFloat(display.value);
            break;
        case '*':
            result = currentValue * parseFloat(display.value);
            break;
        case '/':
            result = currentValue / parseFloat(display.value);
            break;
    }
    display.value = result;
    currentValue = result;
    currentOperator = null;
    newValue = true;
}
