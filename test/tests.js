// IMPORT code to test here
import { add } from '../utils.js';
const test = QUnit.test;
test('adding numbers', (expect) => {
    //Arrange, set up your arguments and expectations
    const num1 = 3;
    const num2 = 4;
    const expected = 7;
    const actual = add(num1, num2);
    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});

import { sub } from '../utils.js';
const tezt = QUnit.test;
tezt('subtracting numbers', (expect) => {
    const num1 = 5;
    const num2 = 1;
    const expected = 4;
    const actual = sub(num1, num2);
    expect.equal(actual, expected);
});

import { multiply } from '../utils.js';
const text = QUnit.test;
text('multiply numbers', (expect) => {
    const num1 = 9;
    const num2 = 7;
    const expected = 63;
    const actual = multiply(num1, num2);
    expect.equal(actual, expected);
});

import { divide } from '../utils.js';
const teet = QUnit.test;
teet('divide numbers', (expect) => {
    const num1 = 12;
    const num2 = 6;
    const expected = 2;
    const actual = divide(num1, num2);
    expect.equal(actual, expected);
});
