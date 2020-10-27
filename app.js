//declaring new class
class Calculator {
    constructor(previousOperandTextElement, currentOperandTextElement) {
    this.previousOperandTextElement = previousOperandTextElement;
    this.currentOperandTextElement = currentOperandTextElement;
    this.clear()
}
    //operations performed on calculator

    clear() {
        //clearing up all both values and operation
        this.currentOperand = ''
        this.previousOperand = ''
        this.operation = undefined
    }

    //deleting last digit
    delete() {
        this.currentOperand = this.currentOperand.toString().slice(0, -1)
    }

    //appending cyphers to numbers
    appendNumber(number){
        //making sure there is only one dot
        //'return' stops it from adding any more dots! 
        if (number === '.' && this.currentOperand.includes('.')) return 
        //adding next number behind the previous one
        this.currentOperand = this.currentOperand.toString() + number.toString()
    }

    //picking the operation from +, - etc
    chooseOperation(operation) {
        //not appending an empty string
        if (this.currentOperand === '') return
        //compute the operations on previous value
        if (this.previousOperand !== '' ) {
            //calling on compute, that uses cases
            this.compute()
        }

        this.operation = operation
        //previous operant put into previous when opeartion chosen
        this.previousOperand = this.currentOperand
        this.currentOperand = ''
    }

    //function does math calculations
    compute() {
        let computation
        const prev = parseFloat(this.previousOperand)
        const current = parseFloat(this.currentOperand)
        //checking if both values exist
        if (isNaN(prev) || isNaN(current)) return
        
        //adding case
        switch (this.operation) {
          case '+':
            computation = prev + current
            break

            //subtracking case
          case '-':
            computation = prev - current
            break

            //multiplying
          case '*':
            computation = prev * current
            break

            //dividing
          case '÷':
            computation = prev / current
            break
            //running defaultvif neither selected
          default:
            return
        }
        //changing current into an answer
        this.currentOperand = computation
        //operation back to unidentified
        this.operation = undefined
        //previous operant empty
        this.previousOperand = ''
    }
    
    //modifying the number
    getDisplayNumber(number) {
        return number
    }

    //updating  Display
    updateDisplay() {
        this.currentOperandTextElement.innerText = 
        this.getDisplayNumber(this.currentOperand);
        //if operation selected, show the previous and operation sign
        if (this.operation != null){
            this.previousOperandTextElement.innerText =
             `${this.getDisplayNumber(this.previousOperand)} ${this.operation}`
        } else {
            //if operation not selected, show an empty previous
            this.previousOperandTextElement.innerText = ' '
        }
    }

}

//picking up variables from button
const numberButtons = document.querySelectorAll('[data-number]')
const operationButtons = document.querySelectorAll('[data-operation]')
const deleteButton = document.querySelector('[data-delete]')
const allClearButton = document.querySelector('[data-all-clear]')
const equalsButton = document.querySelector('[data-equals]')

//picking up variables from output part
const previousOperandTextElement = document.querySelector('[data-previous-operand]')
const currentOperandTextElement = document.querySelector('[data-current-operand]')

//new instance of class calculator created
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

//pressing equal button is computing and displaying an answer
equalsButton.addEventListener('click', button => {
    //calling compute function
    calculator.compute()
    calculator.updateDisplay()
})

//pressing clear button is clearing up entire output
allClearButton.addEventListener('click', button => {
    calculator.clear()
    calculator.updateDisplay()
})

//pressing delete button is deleting last digit
deleteButton.addEventListener('click', button => {
    calculator.delete()
    calculator.updateDisplay()

})