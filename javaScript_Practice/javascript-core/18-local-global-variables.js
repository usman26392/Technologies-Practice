

let num = 10;
/*
    global variable ko hum kahin b acess karsaktay hayn,
    magar local variable sirf apnay block may hi access
    ho sakta hay.
*/

function sum() {
    let num_2 = 25;
    console.log("this num inside the function" + num);
    console.log(num_2);
}

sum();

console.log("This num outside the function!")

/* hum num_2 variable ko function k bahir 
    access nai karsaktay
*/

/*
    Uncaught ReferenceError: num_2 is not defined
*/
console.log(num_2);