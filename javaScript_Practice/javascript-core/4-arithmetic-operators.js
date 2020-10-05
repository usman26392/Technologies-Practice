/*
    arithmetic operators , 
    numbers datatypes may perform kartay hayn.
*/

let number_1 = 12;
let number_2= 13;

let resultOfnumbers = number_1 + number_2;
console.log(resultOfnumbers);

resultOfnumbers = number_1 - number_2;
console.log(resultOfnumbers);

resultOfnumbers = number_1 / number_2;
console.log(resultOfnumbers);

resultOfnumbers = number_1 * number_2;
console.log(resultOfnumbers);

resultOfnumbers = number_1 ** number_2;
console.log(resultOfnumbers);

resultOfnumbers = number_1 % number_2;
console.log("Remainder of 12 / 13 : " + resultOfnumbers);

resultOfnumbers = number_2 % number_1;
console.log("Remainder of 13 / 12 : " + resultOfnumbers);


let a = 2;
let b = 3;
console.log("exponent value of 2**3 = 2*2*2: " + (2**3));


// increment operator:
a++;
//  a++ =  a = a + 1;
console.log("value of a: "+ a);

// decrement operator:
a--;
console.log("Value of a:" + a);



// console.log("Total:" + (number_1 + number_2));

// New way:
// console.log("Total:"+  `${number_1 + number_2}`);