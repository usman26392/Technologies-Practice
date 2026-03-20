/**
 * Template literals or template strings
 */


// tradional way:

let myName = "Usman";
console.log("Hi there " + myName + " !!" );

// new way to concatenate strings with variable
console.log(`Hi there ${myName} !!`);




// example
 let Num_1 = 10;
 let Num_2 = 12;

 console.log(`Sum of two numbers ${Num_1 + Num_2} `);


 /**
  *  used in with function caller.
  */
function SaySomeThing(word) {
    return word;
} 

let mySentence = `today, i am  ${SaySomeThing("Happy")} very well.`; 

console.log(mySentence);


// used for multiple lines:

var firstName = "Muhammad",
    lastName = "Usman",
    city = "karachi",
    postalCode = "55626",
    zipCode = "2200";

var address = `The address is as follows:
    ${firstName} ${lastName}
    ${city}
    ${zipCode}`;
    
    console.log(address);