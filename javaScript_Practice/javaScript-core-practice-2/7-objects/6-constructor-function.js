/**
 * constructor function.
 * 
 */


function Mobile2() {
    this.model = "3310";
    this.price= 3000;
}
let oldMobile = new Mobile2();




/** 
 * parameterize constructor function
 * example-1
 * */  

function mobile1(weight, display, color) {
       this.weight = weight;
       this.display = display;
       this.color =  color;
};
let qMobile = new mobile1(200, "HD", "Red");



/**
 * parameterize constructor function
 * example-2
 */
function mobile(weight, display, color) {
    return {
       weight: weight,
       display: display,
       color: color
    }
};

/**
* new keyword say aik object reference create hoga, jis ki type
*  mobile hogi. 
*  mobile fn jo return kary ga wo us object reference may
*  assign hoja hay ga.
*  or us object reference ko hum kisi variable may assign 
*  kardaen gay. 
*/ 

let nokia7 = new mobile("180g", "6.3 Full HD", "black");
let samsung = new mobile("100g" , "Full HD", "White");
console.log(nokia7);
console.log(samsung);




// real life example
function elementStyle(el, colorName) {
    this.el = document.querySelector(el);
    this.colorName = colorName;
    this.applyStyle = function() {
        this.el.style.backgroundColor = this.colorName
    }
}

let title1 = new elementStyle(".title1", "red")
let title2 = new elementStyle(".title2", "green")
let title3 = new elementStyle(".title3", "blue")


title1.applyStyle();
title2.applyStyle();
title3.applyStyle();