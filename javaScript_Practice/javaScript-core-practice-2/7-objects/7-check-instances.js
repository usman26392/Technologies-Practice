/**
 * check instnaces of object:
 * socho k aik thousand lines ka program ho , or us may 
 * kis object ki property check kar k us par koi manipulatoin karni ho toh 
 * kiya karyn gay
 */

 /**
  * way-1: with the help of typeof operator
  */

 function Mobile2() {
    this.model = "3310";
    this.price = 3000;
}

let samsung = new Mobile2();
if(typeof samsung.price !== "undefined") {
    // do this task
    console.log("object instance exists");
}
else {
    console.log("object instance does not exist");
}



/**
 * way-2:  with the help of ("key" in  objectName) 
 */
function Mobile3() {
    this.model = "3310";
    this.price= 3000;
}

let nokia = new Mobile3();

if("price" in nokia) {
    // do this task
    console.log("object instance exists");
}else {
    console.log("object instance does not exist");
}


/**
 * way-3: with the help of
 */

function Mobile4() {
    this.model = "3310";
    // this.price= 3000;
}

let nokia7 = new Mobile4();

if( nokia7.hasOwnProperty("price") ) {
    // do this task
    console.log("object instance exists");
}else {
    console.log("object instance does not exist");
}