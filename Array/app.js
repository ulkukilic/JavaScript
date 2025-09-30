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
    


    //! push method
    marka.push("Mango");
    console.log(marka); 
    // output: ["Stradivarius", "Zara", "Bershka", "Pull and Bear", "H&M", "Mango"]


    //! pop method  
    // removes the last element from an array and returns that element
    marka.pop();
    console.log(marka); 
    // output: ["Stradivarius", "Zara", "Bershka", "Pull and Bear", "H&M"]



    //! shift method
    // removes the first element from an array and returns that element
    marka.shift();
    console.log(marka); 
    // output: ["Zara", "Bershka", "Pull and Bear", "H&M"]


    //! map method
    // map method is used to create a new array by applying a function to each element of an existing array
    let numbers2 = [1, 2, 3, 4, 5];
    let squaredNumbers = numbers2.map(function(num) {
        return num * num;
    });
    console.log(squaredNumbers);
    // output: [1, 4, 9, 16, 25]


    //! filter method
    // filter method is used to create a new array with all elements that pass the test implemented by the provided function
    let evenNumbers = numbers2.filter(function(num) {   
        return num % 2 === 0;
    });
    console.log(evenNumbers); 
    // output: [2, 4]


    //! reduce method
    // reduce method is used to apply a function against an accumulator and each element in the array (from left to right) to reduce it to a single value
    let sum2 = numbers2.reduce(function(accumulator, currentValue) {
        return accumulator + currentValue;
    }, 0);  
    console.log(sum2);
    // output: 15
    // 1+2+3+4+5 = 15


    //?📌 Example  : Student Grading System
    let students = [
        {name: "Alice", grade: 85},
        {name: "Bob", grade: 70},
        {name: "Charlie", grade: 90},
        {name: "David", grade: 60}
    ];


    // add a new student
    students.push({name: "Eve", grade: 95});
    console.log(students);

    // remove the last student
    students.pop();
    console.log(students);

    // get the names of all students
    let studentNames = students.map(function(student) {
        return student.name;
    }); 
    console.log(studentNames);

    // get the students who passed (grade >= 70)    
    let passedStudents = students.filter(function(student) {
        return student.grade >= 70;
    });
    console.log(passedStudents);

    

    