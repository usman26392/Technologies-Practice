/**
 * constructor function as a class
 */


/**
 * ES6 say pahlay  
*/ 

// var Mobile = function(model_no, ram, color) {
//         this.model_no = model_no;
//         this.ram = ram;
//         this.color = color;
//     }

// var SamSung = new Mobile("1100", "2GB", "white");    



/**
 *  In ES2015 = ES6
 *  is ka kaam b woi hay jo construction function ka tha.
 */

class Mobile {
    constructor(model_no, ram, color) {
        this.model_no = model_no;
        this.ram = ram;
        this.color = color;
    }
}     

/**
 * agar hum Mobile ki type check karyn toh return milay ga aik
 * "function" jo k aik object hi hota hay.
 */
 let SamSung = new Mobile("1100", "2GB", "white");
 let Nokia = new Mobile("3310", "1GB", "Black");