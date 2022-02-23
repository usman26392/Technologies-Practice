
'use strict';

// let student = {
//     firstName: 'Muhammad Usman',
//     age: 30,
// };
// console.log(student);

// OR

// let student_2 = { firstName: 'Muhammad Rehan', age: 20 };



// nested object
// const student = { 
//     name: 'John', 
//     age: 20,
//     marks: {
//         science: 70,
//         math: 75
//     }
// };

// // accessing property of student object
// console.log(student.marks); // {science: 70, math: 75}

// // accessing property of marks object
// console.log(student.marks.science); // 70


// object methods
let firstName1 ="rehan";

let student = {
    firstName: "Muhammad",
    lastName: "Usman",
    age: 30,
    PrintFullName: function() {
        console.log(`My full name is ${this.firstName} ${this.lastName} `);
    },
    PrintSomeThing: () => {
        console.log(`My full name is ${this.firstName1}  `);
        // Arrow function can never be a method
    }
};

// student.PrintFullName();
student.PrintSomeThing();