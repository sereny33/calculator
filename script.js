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

let firstOperand;
let secondOperand;
let operator
let valueStorage = ""


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

const inputDisplay = document.querySelector('#input');
const digits = document.querySelectorAll('.digit');
digits.forEach(digit => digit.addEventListener('click', (e)=> {
    inputDisplay.textContent += `${e.target.value}`
    valueStorage += `${e.target.value}`
}));

// choose operator and firstOperand, empty input
const opers = document.querySelectorAll('.oper')
opers.forEach(oper => oper.addEventListener('click', (e)=> {
    firstOperand = +valueStorage;
    valueStorage = ""
    inputDisplay.textContent = ''
    operator = `${e.target.value}`
}));

// assign secondOperand and evaluate
const equals = document.querySelector('.equals');
equals.addEventListener('click', ()=> {
    secondOperand = +valueStorage;
    valueStorage = ""
    inputDisplay.textContent = "";
    inputDisplay.textContent = `${operate(firstOperand,operator,secondOperand)}`
    
});


