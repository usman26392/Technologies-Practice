/**
 * prototype
 */

// class Mobile {
//     constructor() {
//         this.color = "red";
//     }
// }


// let Samsung = new Mobile();
// let Nokia = new Mobile();




// /**
//  * manually declare
//  */
// // Samsung.weight = "180g";


// /**
//  * with prototype
//  */
// Mobile.prototype.model = "110";


// console.log(Samsung.model);
// console.log(Samsung);





// with  individual objects
// var Car =  {
//     name: "civic",
//     carAC: {
//         name: "myAx"
//     }
// };

// var MotorBike =  {
//     name: "star"
// };


// Car.__proto__.model = "3310";


// var vehicleYear = function(year) {
//     return {
//         nameOfyear: year
//     }
// }

// var myCar = new vehicleYear("2021");


// if we change value of prototype property
// myCar.__proto__.model = "1010";





// with constructor function

// var Car = function(name) {
//     this.name = name;
// }

// var MotorBike = function(name) {
//     this.name = name;
// }

// let myCar = new Car("Civic");

// let myBike = new MotorBike("Star");

// myCar.__proto__.model = "3310";





// function topic
 function ValueNumber(a,b) {
    return a + b;
  }
  
  
  function SUM() {
    let sumTotal = ValueNumber(2,3);
    console.log(sumTotal);
  }
  
  SUM();