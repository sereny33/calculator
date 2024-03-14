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


// operands and operator variables

let firstOperand = +prompt('Num1', 0);
let secondOperand = +prompt('Num2', 0);
let operator = prompt("+ or - or * or /");


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

let result = operate(firstOperand, operator, secondOperand);

console.log(result)