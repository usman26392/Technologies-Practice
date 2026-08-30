/**
 * prototype inheritance
 */


 /**
  * constructor function
  */

class Mobile {
    constructor() {
        this.color = "red";
    }
}

Mobile.prototype.model_no = "3310";
let Samsung = new Mobile();



/**
 * ES6 syntax for inheritance of constructor function.
 */
class Laptop extends Mobile {
    constructor() {
        super();
       this.color2 = "black";
       
    } 
}


/**
 * another constructor function
 */

// class Laptop {
//      constructor() {
//         this.color2 = "black";
//     }
// }
/**
 * hum ye 
 */

 
 /**
  * this was old way:
  */

//  Laptop.prototype = Object.create(Mobile.prototype);
//  Laptop.prototype.constructor = Laptop;
//  let dell = new Laptop();


