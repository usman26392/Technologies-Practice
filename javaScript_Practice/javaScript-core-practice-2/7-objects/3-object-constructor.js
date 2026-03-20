/**
 * object constructor
 * 
 */

 let nokia7 = new Object();
    nokia7.weight = "180g";
    nokia7.display = "6.3 Full HD";
    nokia7.camera = "48 MP";
    nokia7.color = ["Charcoal", "cyan", "Green"]; // Array
    nokia7.operatingSystem = "Android 9 Pie";
    nokia7.Battery = function() {
        console.log("Can go without charging for upto two days");
    };
    nokia7.microSDcard = function() {
        console.log("support for upto 512 GB.")
    }


//  Access object's properties and methods
console.log(nokia7.weight);
console.log(nokia7["weight"]);
nokia7.Battery();
console.log(nokia7.color[0]);


