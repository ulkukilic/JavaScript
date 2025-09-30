//! Object
// object used be to store multiple values in a single variable
// object is a collection of properties, and a property is an association between a name (or key) and a value


let person = {
    firstName: "ELif",
    lastName: "Demir",
    age: 22,
    fullName: function() {
        return this.firstName + " " + this.lastName;
    }
};
console.log(person.firstName);  
console.log(person.lastName);  
console.log(person.age);  
console.log(person.fullName());  
// output: ELif
// output: Demir
// output: 22
// output: ELif Demir   


//? Example
// Write a program that creates an object representing a car with properties for make, model, year, and a method to display the car's information.  
let car = {
    make: "Toyota",
    model: "Camry", 
    year: 2020,
    displayInfo: function() {
        return `${this.year} ${this.make} ${this.model}`;
    }
};
console.log(car.displayInfo());  // 2020 Toyota Camry   

//? Example
// Write a program that creates an object representing a book with properties for title, author, and year published, and a method to display the book's information.
let book = {
    title: "To Kill a Mockingbird", 
    author: "Harper Lee",
    yearPublished: 1960,
    displayInfo: function() {
        return `${this.title} by ${this.author} (${this.yearPublished})`;
    }
};
console.log(book.displayInfo());  // To Kill a Mockingbird by Harper Lee (1960)


//? Example
// Write a program that creates an object representing a student with properties for name, age, and grades (an array of numbers), and a method to calculate the average grade.
let student = {
    name: "Aylin",
    age: 20,
    grades: [85, 90, 78, 92],
    calculateAverage: function() {
        let total = 0;
        for (let i = 0; i < this.grades.length; i++) {
            total += this.grades[i];
        }
        return total / this.grades.length;
    }   
};
console.log(student.calculateAverage());  // 86.25
