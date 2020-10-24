class Calculator {
    constructor(previousOperandTextElement, currentOperandTextElement) {
    this.previousOperandTextElement = previousOperandTextElement;
    this.currentOperandTextElement = currentOperandTextElement;
    this.clear()
}
    //operations performed on calculator

    
    clear() {
        this.currentOperand = ''
        this.previousOperand = ''
        this.operation = undefined
    }

    appendNumber(number){
        //making sure there is only one dot
        //'return' stops it from adding any more dots! 
        if (number === '.' && this.currentOperand.includes('.')) return 
        //adding next number behind the previous one
        this.currentOperand = this.currentOperand.toString() + number.toString()
    }

    chooseOperation(operation) {

    }

    compute() {

    }

    updateDisplay() {
        this.currentOperandTextElement.innerText = this.currentOperand;
    }

}


const numberButtons = document.querySelectorAll('[data-number')
const operationButtons = document.querySelectorAll('[data-operation')
const deleteButton = document.querySelector('[data-delete')
const allClearButton = document.querySelector('[data-all-clear')
const equalsButton = document.querySelector('[data-equal')
const previousOperandTextElement = document.querySelector('[data-previous-operand')
const currentOperandTextElement = document.querySelector('[data-current-operand')

const calculator = new Calculator(previousOperandTextElement, 
    currentOperandTextElement)

numberButtons.forEach(button => {
    button.addEventListener('click', () => {
        calculator.appendNumber(button.innerText)
        calculator.updateDisplay()
    })
})

operationButtons.forEach(button => {
    button.addEventListener('click', () => {
        calculator.appendNumber(button.innerText)
        calculator.updateDisplay()
    })
})