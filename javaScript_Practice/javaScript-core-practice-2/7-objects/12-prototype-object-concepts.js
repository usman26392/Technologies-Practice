/**
 * prototype object concepts.
 */


/**
 *  constructor function is Object 
 */ 
// console.log(Object);


/**
 * prototype, Object ki aik property hay jo k aik object hay.
 */
// console.log(Object.prototype);



/**
 * 
 */
 
// class Mobile {
//     constructor() {
//         this.color = "red";
//     }
// }

// Mobile.prototype.model_no = "3310";

// let Samsung = new Mobile();
// let Nokia = new Mobile();

// console.log(Samsung.model_no);




//----------------------------------- example ------------------------------------

var objProto = {
    greet: function() {
        console.log(this.greeting + " World!");
    }
};

var Greeting = function(terms) {
    this.greeting = terms;
}


Greeting.prototype = objProto;
var obj1 = new Greeting("Howdy");




 