import promptSync from 'prompt-sync';
const prompt = promptSync();

let firstNum = prompt('Enter the first number: ');
let secondNum = prompt('Enter the second number: ');

let operation = prompt('Enter the operation (+, -, *, /): ');

let result = 0;

if (['+', '-', '*', '/'].includes(operation)) {
  if (operation === '+') {
    result = parseFloat(firstNum) + parseFloat(secondNum);
  } else if (operation === '-') {
    result = parseFloat(firstNum) - parseFloat(secondNum);
  } else if (operation === '*') {
    result = parseFloat(firstNum) * parseFloat(secondNum);
  } else if (operation === '/') {
    result = parseFloat(firstNum) / parseFloat(secondNum);
  }
  console.log(`Result: ${result}`);
} else {
  console.log('You entered a wrong operator!');
}
