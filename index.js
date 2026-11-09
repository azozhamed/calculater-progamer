import promptSync from 'prompt-sync';
const prompt = promptSync();

let firstNum = prompt('Enter the first number: ');
let secondNum = prompt('Enter the second number: ');

let operation = prompt('Enter the operation (+, -, *, /): ');

let result = 0;

if (operation === '+') {
    result = parseFloat(firstNum) + parseFloat(secondNum);
} 
else if (operation === '-') {
    result = parseFloat(firstNum) - parseFloat(secondNum);
} 
else if (operation === '*') {
    result = parseFloat(firstNum) * parseFloat(secondNum);
}
else if (operation === '/') {
    result = parseFloat(firstNum) / parseFloat(secondNum);
} else {

    

}