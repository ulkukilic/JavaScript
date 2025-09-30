console.log(`Hello, Variables and Math!`);  // this is a basic log statement

//! variables

let myName = "Elif";  // string variable
let myAge = 22;  // number variable
let isStudent = true;  // boolean variable      
const birthYear = 2001; 

//TODO note : let is used for variables that can change, const is used for variables that won't change
console.log(typeof myName);  // string
console.log(typeof myAge);  // number
console.log(typeof isStudent);  // boolean
// if we wannto see the type of a variable, we can use typeof operator

//! Math operations
let a = 10;
let b = 3;
let sum = a + b; 
let difference = a - b;
let product = a * b; 
let quotient = a / b;  
let remainder = a % b;  

//? Example 
// write a program that calculates a person's age
let currentYear = 2024;
let age = currentYear - birthYear; 
console.log(`I am ${age} years old.`);  
// output: I am 23 years old.

//? Example
// write a program that calculates the area of a rectangle
let length = 5;
let width = 10;
let area = length * width;
console.log(`The area of the rectangle is ${area} square units.`);  // The area of the rectangle is 50 square units.

// output: The area of the rectangle is 50 square units.


