
/**
 * There are two types of values
 * 1) primitives
 * 2) Object
 */


// primitive example: pass by value
// (function() {
//     let a = 1;
//     let b = 1;
//     console.log(a === b)
// })();



// reference value example
// (function() {
//     let a = [1];
//     let b = [1];
//     console.log(a === b );
// })();


// reference value example
// (function() {

//     const a = {
//         skills: "cooking"
//     }

//     const b = {
//         skills: "cooking"
//     }

//     console.log(a === b);

// })();



/**
 * ----------------------- difference between value and reference ----------------
 */


// pass by value example
// (function() {
//     function incrementAge(age) {
//         age = age + 1
//     }

//     const myAge = 10;
//     incrementAge(myAge);
//     console.log(myAge)

// })();

// pass by reference example
// (function() {

//     function incrementAge(user) {
//         user.age = user.age + 1
//     }
    
//     const me = {
//         age: 10
//     }
    
//     incrementAge(me);
//     console.log(me.age);

// })();

// ------------------------------------- #### ------------------------------------

// pass by value example
// let a = 10;
// let b = a;

// // if a is set to 15
// // a = 15;
// // console.log(a);
// // console.log(b);

// // if b is set to 15
// b = 15;
// console.log(a);


// pass by reference example
// let a = {
//     name: "Usman"
// }
// let b = a;

// console.log(b)

// if a's name change
// a.name = "Rehan"
// console.log(b);
// console.log(a);

// if b's name change 
// b.name = "farhan"
// // than a object will be change.
// console.log(a)


// ----------------------------------------- ######--------------------------------
// if change whole object
let a = {
    name: "Usman"
}

// is waqt 'a' ka jo b reference address tha wo 'b' variable may hay.
let b = a;
console.log(b)

// or ab yahan, 'a' object aik or reference address rakh raha hay,
// jo k 'b' variable k pass nahi ho ga.
a = {
    name: "rehan"
}

// or agar ab yahan, dobara 'a' object , 'b' ko assign kardayn toh 
// b k pass b new reference hoga.
// b = a;


console.log(b)

