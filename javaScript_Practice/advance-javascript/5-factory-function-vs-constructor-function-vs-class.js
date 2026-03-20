
/**
 * -------------------------- factory function ----------------------
 */

// function mobileFactory(n) {
//     return {
//         name: n
//     }
// }

// let mobile1 = mobileFactory("samsung galaxy A02s");


/**
 * ----------------------------- constructor function -------------------------
 */

function MobileNames(n) {
    this.name = n
} 

let mobile1 = new MobileNames("samsung galaxy A02s");

