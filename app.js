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

    delete() {
        this.currentOperand = this.currentOperandTextElement.toString().slice(0, -1)
    }

    appendNumber(number){
        //making sure there is only one dot
        //'return' stops it from adding any more dots! 
        if (number === '.' && this.currentOperand.includes('.')) return 
        //adding next number behind the previous one
        this.currentOperand = this.currentOperand.toString() + number.toString()
    }

    chooseOperation(operation) {
        //not appending an empty string
        if (this.currentOperand === '') return
        //compute the operations on previous value
        if (this.previousOperand !== '' ) {
            this.compute()
        }
        this.operation = operation
        this.previousOperand = this.currentOperand
        this.currentOperand = ''
    }

    compute() {
        let computation 
        const prev = parseFloat(this.previousOperand)
        const current = parseFloat(this.currentOperand)
        if (isNaN(prev) || isNaN(current)) return 

        switch (this.operation) {
            case '+': 
            computation = prev + current 
            break

            case '-': 
            computation = prev - current 
            break

            case '*': 
            computation = prev * current 
            break

            case '/': 
            computation = prev / current 
            break
            //in case of invalid computation
            default:
                return
        }

        this.currentOperand = computation
        this.operation = undefined
        this.previousOperand = ''

    }

    updateDisplay() {
        this.currentOperandTextElement.innerText = this.currentOperand;
        this.previousOperandTextElement.innerText = this.previousOperand;

    }

}


const numberButtons = document.querySelectorAll('[data-number]')
const operationButtons = document.querySelectorAll('[data-operation]')
const deleteButton = document.querySelector('[data-delete]')
const allClearButton = document.querySelector('[data-all-clear]')
const equalsButton = document.querySelector('[data-equal]')
const previousOperandTextElement = document.querySelector('[data-previous-operand]')
const currentOperandTextElement = document.querySelector('[data-current-operand]')

const calculator = new Calculator(previousOperandTextElement, 
    currentOperandTextElement)

//numbers buttons working
numberButtons.forEach(button => {
    button.addEventListener('click', () => {
        calculator.appendNumber(button.innerText)
        calculator.updateDisplay()
    })
})

//operations buttons working 
operationButtons.forEach(button => {
    button.addEventListener('click', () => {
        calculator.chooseOperation(button.innerText)
        calculator.updateDisplay()
    })
})

equalsButton.addEventListener('click', button => {
    //calling compute function
    calculator.compute()
    calculator.updateDisplay()
    console.log('equal')
})

allClearButton.addEventListener('click', button => {
    calculator.clear()
    calculator.updateDisplay()
    console.log('clear')

})

deleteButton.addEventListener('click', button => {
    calculator.delete()
    calculator.updateDisplay()
    console.log('delete')

})