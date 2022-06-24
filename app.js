// import needed modules
import { add } from '../utils.js';


// define and grab DOM elements
const addInput1 = document.getElementById('add-input-1');
const addInput2 = document.getElementById('add-input-2');
const addButton = document.getElementById('add-button');
const addResult = document.getElementById('add-result');

addButton.addEventListener('click', () => {
    const num1 = Number(addInput1.value);
    const num2 = Number(addInput2.value);
    addResult.textContent = add(num1, num2);
});
// event handlers - what needs to happen?
 // logic and calculations
     // update UI

import { sub } from '../utils.js';

const subInput1 = document.getElementById('sub-input-1');
const subInput2 = document.getElementById('sub-input-2');
const subButton = document.getElementById('sub-button');
const subResult = document.getElementById('sub-result');

subButton.addEventListener('click', () => {
    const num1 = Number(subInput1.value);
    const num2 = Number(subInput2.value);
    subResult.textContent = sub(num1, num2);
});  

import { multiply } from '../utils.js';

const multiplyInput1 = document.getElementById('multiply-input-1');
const multiplyInput2 = document.getElementById('multiply-input-2');
const multiplyButton = document.getElementById('multiply-button');
const multiplyResult = document.getElementById('multiply-result');

multiplyButton.addEventListener('click', () => {
    const num1 = Number(multiplyInput1.value);
    const num2 = Number(multiplyInput2.value);
    multiplyResult.textContent = multiply(num1, num2);
});  

import { divide } from '../utils.js';

const divideInput1 = document.getElementById('divide-input-1');
const divideInput2 = document.getElementById('divide-input-2');
const divideButton = document.getElementById('divide-button');
const divideResult = document.getElementById('divide-result');

divideButton.addEventListener('click', () => {
    const num1 = Number(divideInput1.value);
    const num2 = Number(divideInput2.value);
    divideResult.textContent = divide(num1, num2);
});  


