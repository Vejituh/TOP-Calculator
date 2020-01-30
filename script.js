'use strict';
let total = 0;

const add = (num1,num2) => {total = num1 + num2}
const subtract = (num1,num2) => {total =  num1 - num2}
const multiply = (num1,num2) => {total = num1 * num2}
const divide = (num1,num2) => {total =  num1 / num2}

const operate = (operator,num1,num2) => {
switch (operator) {
    case add:
    add(num1,num2);
    break;
    case subtract:
    subtract(num1,num2);
    break;
    case multiply:
    multiply(num1,num2);
    break;
    case divide:
    divide(num1,num2);
    break;
    default:
    return "Error";
    }
    
    return total;
}


