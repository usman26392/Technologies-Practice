/**
 * object literal:
 * object declare and initialize karnay ka tariqa.
 */

 let nokia7 = {
     weight: "180g", 
     display: "6.3 Full HD",
     camera: "48 MP",
     color: ["Charcoal", "cyan", "Green"], // Array
     operatingSystem: "Android 9 Pie",
     Battery: function() {
         console.log("Can go without charging for upto two days");
     },
     microSDcard: function() {
         console.log("support for upto 512 GB.")
     }
 };

    

//  Access object's properties and methods
console.log(nokia7.weight);
console.log(nokia7["weight"]);
nokia7.Battery();
console.log(nokia7.color[1]);


/**
 * an empty literal object
 * empty literal object banany k baad b hum us ki properties or methods set karsakhtay
 * hayn.
 */

 let nokia8 = {}; // an empty literal object
 nokia8.weight = "80g";
 nokia8.display = "6.3 Full HD";
 nokia8.camera = "48 MP";

