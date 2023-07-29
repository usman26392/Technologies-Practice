
// 
// console.log(this);

// ------------------------------------------------------------
// if(true) {
//     console.log(this);
// }


// ---------------------------------------------------------------
// function talk() {
//     return this;
// }

// const me = {
//     name: "Muhammad Usman",
//     talk
// }

// console.log(me);
// console.log(window.talk())


// -----------------------------------------------------
// function talk(name) {
//     return `I am ${this.name}`
// }

// const me = {
//     name: "Muhammad Usman",
// }

// let meTalkBound =  talk.bind(me);
// console.log(meTalkBound());
// // or
// console.log( talk.bind(me)() )

// ---------------------------------------------------
// function Person(n) {
//     this.name = n
//     this.talk = function() {
//         console.log(this)
//     }
//     this.talk2 = ()=> {
//         console.log(this)
//     }
// }

// let me = new Person("Usman");

// // console.log(Person);
// // console.log(me);
// me.talk();
// me.talk2();




// -------------------------------- talk with normal function --------------------
// (function() {
//     let check = {
//         talk: function() {
//             console.log(this)
//         }
//         // or
//         // talk() {
//         //     console.log(this)
//         // }
//     }
//     check.talk();
// })();




// -------------------------------- talk with arrow function --------------------------

// object k andar jo functions hum banatay hayn un ko arrow function say nai banana chayey.
// let check = {
//     talk: ()=> {
//         console.log(this); // window object
//     }
// }
// check.talk()




// ----------------------------------  this with global context when setTimeout -------------------------------

// function Person(n) {
//     this.name = n
//     this.talk = function() {
//         console.log(this)
//     }
//     setTimeout(function(){
//         console.log(this)
//     }, 500);
// }
// let me = new Person("Usman");



// -------------------- above problem fix with bind function and arrow function --------------------------
// function Person(n) {
//     this.name = n
//     this.talk = function() {
//         console.log(this)
//     }

//     setTimeout(function(){
//         console.log(this)
//     }.bind(this), 500);
    
//     // or with arrow function
//     setTimeout( ()=> {
//         console.log(this)
//     },500);

// }


// let me = new Person("Usman");




// -----------------------------------------------------------------------

// examaple: with problem
// function outer(callback) {
//     callback()
// }

// function inner() {
//     console.log(this)
// }

// outer(inner)

// fix problem
function outer(callback, obj) {
    callback.call(obj)
}

function inner() {
    console.log(this)
}

outer(inner, {name: "Muhammad Usman"});


































