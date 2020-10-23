class Calculator {
    constructor(previousOperandTextElement, currentOperandTextElement) {
    this.previousOperandTextElement = previousOperandTextElement;
    this.currentOperandTextElement = currentOperandTextElement;
    }
    //operations performed on calculator

    clear() {

    }

    appendNumber(number){

    }

    chooseOperation(operation) {

    }

    compute() {

    }

    updateDisplay() {
        
    }

}




const numberButtons = document.querySelectorAll('[data-number')
const operationButtons = document.querySelectorAll('[data-operation')
const deleteButton = document.querySelector('[data-delete')
const allClearButton = document.querySelector('[data-all-clear')
const equalsButton = document.querySelector('[data-equal')
const previousOperandTextElement = document.querySelector('[data-previous-operand')
const currentOperandTextElement = document.querySelector('[data-current-operand')