// calculator operations 

const addition = function(a, b) {
    return a + b;
}

const subtraction = function(a, b) {
    return a - b;
}

const multiplication = function(a, b) {
    return a * b;
}

const division = function(a, b) {
    return (b !== 0) ? (a / b) : "ERROR";
}


// operands, operator and storage variables

let firstOperand = 0;
let secondOperand = 0;
let operator = ""
let valueStorage = "";
let currentValue = [];


// chosing operation to perform
const operate = function(firstOperand, operator, secondOperand) {
    switch (operator) {
        case "+":
            return addition(firstOperand, secondOperand);
        break;

        case "-":
            return subtraction(firstOperand, secondOperand);
        break;

        case "*":
            return multiplication(firstOperand, secondOperand);
        break;

        case "/":
            return division(firstOperand, secondOperand);
        break;
    }
}

// filling the display and storing values
const history = document.querySelector('#history');

const inputDisplay = document.querySelector('#input');
const digits = document.querySelectorAll('.digit');
digits.forEach(digit => digit.addEventListener('click', digitInput)); // click btn digit input
window.addEventListener('keydown', (e) => {                          // keyboard digit input
    for (let digit of digits) {                         
        if (e.key === digit.value) {
            currentValue.push(digit.value)
            valueStorage = `${currentValue.join('')}`
            inputDisplay.textContent = valueStorage;
        }
    }
})

function digitInput(e) {
        currentValue.push(e.target.value)
        valueStorage = `${currentValue.join('')}`
        inputDisplay.textContent = valueStorage;
}

// choose operator and firstOperand, empty input
const opers = document.querySelectorAll('.oper')
opers.forEach(oper => oper.addEventListener('click', operInput)); // click btn oper input
window.addEventListener('keydown', (e) => {                       // keyboard oper input
    for (let oper of opers) {                         
        if (e.key === oper.value) {
            firstOperand = +valueStorage;
            history.textContent = `${firstOperand} ${oper.value}`
            valueStorage = ""
            inputDisplay.textContent = ''
            currentValue = []
            operator = `${oper.value}`
        }
    }
})

function operInput(e) {
        firstOperand = +valueStorage;
        history.textContent = `${firstOperand} ${e.target.value} `
        valueStorage = ""
        inputDisplay.textContent = ''
        currentValue = []
        operator = `${e.target.value}`
}

// assign secondOperand and evaluate
const equals = document.querySelector('.equals');
equals.addEventListener('click', eval);

window.addEventListener('keydown', (e) => {
    if (e.key === equals.value) {
        secondOperand = +valueStorage;
        history.textContent += ` ${valueStorage} `;
        valueStorage = operate(firstOperand, operator, secondOperand)
        currentValue = [];
        inputDisplay.textContent = valueStorage
        }
})

function eval(e) {
        secondOperand = +valueStorage;
        history.textContent += ` ${valueStorage} `;
        valueStorage = operate(firstOperand, operator, secondOperand)
        currentValue = [];
        inputDisplay.textContent = valueStorage
}

// clear button
const clear = document.querySelector('.clear');
clear.addEventListener('click', clearAll)

function clearAll() {
    firstOperand = null;
    secondOperand = null;
    valueStorage = "";
    currentValue = [];
    inputDisplay.textContent = "";
    history.textContent = ""
}

// backspace button
const del = document.querySelector('.backspace')
del.addEventListener('click', backspace);
window.addEventListener('keydown', (e) => {
    if (e.key === del.value) {
        backspace()
    }
})

function backspace() {
    currentValue = valueStorage.toString().split('')
    currentValue.pop();
    valueStorage = `${currentValue.join('')}`
    inputDisplay.textContent = currentValue.join('')
}
    

// positive / negative

const plusMinus = document.querySelector('.plus-minus');
plusMinus.addEventListener ('click', positiveNegative);

function positiveNegative() {
    valueStorage = -valueStorage;
    inputDisplay.textContent = `${valueStorage}`
}

// point btn to work with floats

const point = document.querySelector('.point')
point.addEventListener ('click', makeFloat)
window.addEventListener ('keydown', (e) => {
    if (e.key === point.value) {
        if (valueStorage.split('.').length < 2) {
            currentValue.push(point.value)
            valueStorage = `${currentValue.join('')}`
            inputDisplay.textContent = valueStorage;
        }
    }
})

function makeFloat(e) {

    if (valueStorage.split('.').length < 2) {
        currentValue.push(e.target.value)
        valueStorage = `${currentValue.join('')}`
        inputDisplay.textContent = valueStorage;
    }

}


