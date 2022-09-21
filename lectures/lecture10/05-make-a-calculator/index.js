const addNumbers = (ev) => {
    // Your job: 
    // 1. Access the first number that the user typed in and store it
    //    as a variable.
    let firstNumber = document.querySelector('#num1').value;
    // 2. Access the second number that the user typed in and store it
    //    as a variable.
    let secondNumber = document.querySelector('#num2').value;
    // 3. Convert the values stored inside of the two variables to a 
    //    number (so that you can do math)!
    firstNumber = Number(firstNumber);
    secondNumber = Number(secondNumber);
    // 4. Add the two numbers together.
    sum = firstNumber+secondNumber;
    // 5. Write the result to the #answer section
    document.querySelector('#answer').innerHTML = sum;


}

const subtractNumbers = (ev) => {
    // Same as above but subtract!
    let firstNumber = document.querySelector('#num1').value;
    let secondNumber = document.querySelector('#num2').value;
    firstNumber = Number(firstNumber);
    secondNumber = Number(secondNumber);
    sum = firstNumber-secondNumber;
    document.querySelector('#answer').innerHTML = sum;
}

const multiplyNumbers = (ev) => {
    // Same as above but multiply!
    let firstNumber = document.querySelector('#num1').value;
    let secondNumber = document.querySelector('#num2').value;
    firstNumber = Number(firstNumber);
    secondNumber = Number(secondNumber);
    sum = firstNumber*secondNumber;
    document.querySelector('#answer').innerHTML = sum;
}

const divideNumbers = (ev) => {
    // Same as above but divide!
    let firstNumber = document.querySelector('#num1').value;
    let secondNumber = document.querySelector('#num2').value;
    firstNumber = Number(firstNumber);
    secondNumber = Number(secondNumber);
    sum = firstNumber/secondNumber;
    document.querySelector('#answer').innerHTML = sum;
}

