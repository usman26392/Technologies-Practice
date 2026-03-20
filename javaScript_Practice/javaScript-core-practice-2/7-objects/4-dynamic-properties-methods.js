/**
 * Dynamic properties and methods etc of object
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


/**
 *  koi aysa program hay jis may hum object may , kuch properties ya 
 *  methods wagaira baad may us object ka part banana chahatay hayn, matlab interpret
 *  hotay waqt , toh us k liyey hum bahir b declare or initialize karwasakhtay hayn.
 */

// add property
nokia7.material = "steel";

//add  method
nokia7.price = function() {
    console.log("47 thousands");
}


// access dynamic property and method
console.log(nokia7.material);
nokia7.price();



/**
 *  Dynamic deleting properties and methods etc from object. 
 */
 delete nokia7.weight;
 console.log(nokia7);