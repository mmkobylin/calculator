document.addEventListener('DOMContentLoaded', () => {

    //selecting the div by the class
    const grid = document.querySelector('.grid')
    
    //initial value
    //pseudocode: 
    // i need 4 by 4 grid layout
    // i need onclick events for each of the div's
    //i need total to show when something is clicked;
    //i need the display to show up 

    let three = document.getElementById('3');
    three.addEventListener('click', () => console.log(3));
    let four = document.getElementById('4');
    four.addEventListener('click', () => console.log(4));
    let five = document.getElementById('5');
    five.addEventListener('click', () => console.log(5));
    let six = document.getElementById('6');
    six.addEventListener('click', () => console.log(6));
    let seven = document.getElementById('7');
    seven.addEventListener('click', () => console.log(7));
    let eight = document.getElementById('8');
    eight.addEventListener('click', () => console.log(8));
    let nine = document.getElementById('9');
    nine.addEventListener('click', () => console.log(9));
    let zero = document.getElementById('0');
    zero.addEventListener('click', () => console.log(0));

    //i need it to rerender it when an event is triggered

   (d => { 
    let increment = document.getElementById('1');

        let display = document.getElementById('total');

        let total = []; 

        increment.addEventListener('click', () => { 
            total +=1 
        
        display.textContent = total;
        
        });
    })(document);

});