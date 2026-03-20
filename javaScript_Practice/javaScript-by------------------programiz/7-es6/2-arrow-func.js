

// function Person() {
//     this.name = 'Jack',
//     this.age = 25,
//     this.sayName = function () {
//         // this is accessible
//         console.log(this.age);

//         // normal function
//         function innerFunc() {
//             // this refers to the global object
//             console.log(this.age);
//             console.log(this);
//         }
//         innerFunc();
//     }
// }

// let x = new Person();
// x.sayName();



// inside an arrow function
function Person() {
    this.name = 'Jack',
    this.age = 25,
    this.sayName = function () {
        // this is accessible
        console.log(this.age);

        // Arrow function
        let innerFunc =  ()=> {
            // this refers to the global object
            console.log(this.age);
            console.log(this);
        }
        innerFunc();
    }
}

let x = new Person();
x.sayName();
