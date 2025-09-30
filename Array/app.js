//! Array

 let marka = ["Stradivarius", "Zara", "Bershka", "Pull and Bear", "H&M"];
      console.log(marka); 
      console.log(marka[0]);
      console.log(marka[1]);
      console.log(marka[4]); 
      console.log("en sevdigim marka " + marka[0]);

    // output: ["Stradivarius", "Zara", "Bershka", "Pull and Bear", "H&M"]
    // output: Stradivarius
    // output: Zara
    // output: H&M
    // output: en sevdigim marka Stradivarius



    //? Example
    // Write a program that creates an array of your favorite fruits and prints each fruit on a new line.
    let fruits = ["apple", "banana", "cherry", "date", "elderberry"];
    for (let i = 0; i < fruits.length; i++) {
        console.log(fruits[i]);
    }
    // output: apple
    // output: banana
    // output: cherry
    // output: date
    // output: elderberry



    //? Example
    // Write a program that calculates the average of an array of numbers.
    let numbers = [10, 20, 30, 40, 50]; 
    let total = 0;
    for (let i = 0; i < numbers.length; i++) {
        total += numbers[i];  
    }   
    let average = total / numbers.length;
    console.log(`The average is ${average}`);
    // output: The average is 30
    
    