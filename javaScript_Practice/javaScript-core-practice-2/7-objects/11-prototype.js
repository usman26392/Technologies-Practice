/**
 * prototype
 */

class Mobile {
    constructor() {
        this.color = "red";
    }
}

let Samsung = new Mobile();
let Nokia = new Mobile();

/**
 * manually declare
 */
// Samsung.weight = "180g";


/**
 * with prototype
 */
Mobile.prototype.model = "110";


console.log(Samsung.model);
console.log(Samsung);