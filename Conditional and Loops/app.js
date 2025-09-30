//! if else 
let hour = 10;
if (hour < 18) {
    console.log("Good day");
} else {
    console.log("Good evening");
}   

//? example 
// Write a program that checks if a number is positive, negative, or zero and prints an appropriate message.
let number = -5;    
if (number > 0) {
    console.log("The number is positive.");
}   
else if (number < 0) {
    console.log("The number is negative.");
}
else {
    console.log("The number is zero.");
}

//? example
// if person is under 18, print "You are a minor". If the person is between 18 and 65, print "You are an adult". If the person is over 65, print "You are a senior citizen".
let age = 70;   
if (age < 18) {
    console.log("You are a minor.");
}
else if (age <= 65) {
    console.log("You are an adult.");
}   
else {
    console.log("You are a senior citizen.");
}


//!  && (and)  || (or) ! (not)
//  if (condition1 && condition2) {  // both conditions must be true
//  if (condition1 || condition2) {  // at least one condition must be true
//  if (!condition) {  // condition must be false

//? example
// Write a program that checks if a person can enter a country
let country = "turkiye";
let country2 = "Germany";

if (country === "turkiye" && country2 === "Polska") {  
    console.log("ulkeye girebilirsiniz");
} else {
    console.log("git vize al");
}

//? example
// Write a program that checks if a person is eligible to vote. A person is eligible to vote if they are at least 18 years old and a citizen of the country.
let personAge = 20;
let isCitizen = true;   
if (personAge >= 18 && isCitizen) {
    console.log("You are eligible to vote.");
}   
else {
    console.log("You are not eligible to vote.");
}   




//! switch case
let day = 5;
let dayName;

switch (day) {
  case 1:
    dayName = "Pazartesi";
    break;
  case 2:
    dayName = "Salı";
    break;
  case 3:
    dayName = "Çarşamba";
    break;
  case 4:
    dayName = "Perşembe";
    break;
  case 5:
    dayName = "Cuma";
    break;
  case 6:
    dayName = "Cumartesi";
    break;
  case 7:
    dayName = "Pazar";
    break;
  default:
    break;
}

console.log(dayName);
// output: Cuma

//? example 
// Write a program that takes a letter grade (A, B, C, D, F) and prints a message based on the grade.
let grade = "a";
let message;

switch (grade) {
  case "A":
  case "a":
    message = "Mükemmel!";
    break;
  case "B":
    message = "Güzel ";
    break;
  case "C":
    message = "Geçtin ";
    break;
  case "D":
    message = "Daha çok çalışman lazım!";
    break;
  case "F":
    message = "Kaldın ";
    break;
  default:
    message = "Geçersiz not";
    break;
}
console.log(message);
//NOTE : break is used to exit the switch statement once a case is matched.


//! While LOOP
//? example
let sarj = 5; 

while (sarj > 0) {
  console.log("Şarj seviyesi: %" + sarj);
  sarj--; // her turda 1 düş
}
console.log("Telefon kapandı! ");


//! DO WHILE LOOP

//? example
let i = 0;
do {
    console.log(i);
    i++;
} while (i < 5);


//? example
// Write a program that prints the numbers from 1 to 10 using a do...while loop.
let num = 1;
do {
    console.log(num);
    num++;
}
while (num <= 10);
// output: 1 2 3 4 5 6 7 8 9 10


//? example
// print the prime numbers from 1 to 10
let sayac4 = 1;
while (sayac4 <= 10) {
    let asal = true;    
    if (sayac4 <= 1) {
        asal = false;
    } else {
        for (let i = 2; i < sayac4; i++) {
            if (sayac4 % i === 0) {
                asal = false;
                break;
            }
        }
    }         
    sayac4++; // sayaci +1 
} 


//! FOR LOOP

//? example
for (let i = 0; i < 5; i++) {
    console.log(i);
}   


//? example
// Write a program that prints the even numbers from 1 to 20 using a for loop.
for (let num = 1; num <= 20; num++) {
    if (num % 2 === 0) {    
        console.log(num);
    }   
}
// output: 2 4 6 8 10 12 14 16 18 20



//? example
// Write a program that calculates the factorial of a number using a for loop.
let number2 = 5; // 5! = 5*4*3*2*1 = 120
let factorial = 1;
for (let i = 1; i <= number2; i++) {
    factorial *= i; // factorial = factorial * i
}
console.log(`The factorial of ${number2} is ${factorial}.`);  
// output: The factorial of 5 is 120.   

//? example
// Write a program that prints the even numbers from 0 to 10 using a for loop.
for ( let number=0; number <= 10 ; number += 2)   
{
    console.log(number  );
}
// output: 0 2 4 6 8 10