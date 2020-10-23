document.addEventListener('DOMContentLoaded', () => {

    //selecting the div by the class
    const grid = document.querySelector('.grid')
    
    //initial value
    //pseudocode: 
    // i need 4 by 4 grid layout
    // i need onclick events for each of the div's
    
    let total = 0; 

    let one = document.getElementById('1');
    one.addEventListener('click', () => total +=1);


    let two = document.getElementById('2');
    two.addEventListener('click', () => total +=2);
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


});