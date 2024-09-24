// script.js

// (a) Function to calculate the area of a circle with a radius of 6 type shit
const calculateCircleArea = () => {
    const radius = 6;
    const area = Math.PI * radius * radius;
    console.log(`Area of the circle with radius ${radius} is: ${area.toFixed(2)}`);
};

// (b) Function to do that there addition, subtraction, multiplication, and division
const arithmeticOperations = (num1, num2) => {
    console.log(`Performing arithmetic operations on ${num1} and ${num2}:`);
    console.log(`Addition: ${num1 + num2}`);
    console.log(`Subtraction: ${num1 - num2}`);
    console.log(`Multiplication: ${num1 * num2}`);
    console.log(`Division: ${num1 / num2}`);
};

// (c) Function to calculate the area of a rectangle with length 20 and width 15
const calculateRectangleArea = () => {
    const length = 20;
    const width = 15;
    const area = length * width;
    console.log(`Area of the rectangle with length ${length} and width ${width} is: ${area}`);
};

// call them there functions to pup ths shit up on the ol console
calculateCircleArea();
arithmeticOperations(10, 5);
calculateRectangleArea();

/**
 * Answers to the questions:
 * 
 * (a) What is the scope of a const variable?
 *     - id say that const words have block scope so you can only use that shit within the block (inside a pair of curly braces `{}`) where it is created.
 *       It cannt be redeclared or reassigned once made. but, if the const is an object or array, its properties or elements can be changed, y? hell if i know.
 * 
 * (b) When were the let and const keywords added to JavaScript?
 *     - The 'let' and 'const' keywords were cchucked into the ol JavaScript as part of ECMAScript 2015 (ES6) update!!!!
 */