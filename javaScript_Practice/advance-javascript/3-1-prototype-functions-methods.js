

/**
    call()
    apply()
    bind()
 * 
 */


// problem in functions due to repeated code !

// let userDetail = {
//     name: "Farhan ali",
//     age: 33,
//     designation: "Artist",
//     printDetails: function() {
//         console.log(`${this.name} and ${this.designation}`)
//     }
// }

// let userDetail2 = {
//     name: "Muhammad Usman",
//     age: 31,
//     designation: "Front end developer",
//     printDetails: function() {
//         console.log(`${this.name} and ${this.designation}`)
//     }
// }

// userDetail.printDetails();
// userDetail2.printDetails();


/**
 * ------------------------------------ solution ------------------
 */

// javascript may koi b function k doh prototype hotay hayn
// 1) prototype object
// 2) prototype function
// issi waja say koi b function apnay prototype object , prototype function ko access kar sakhta hay.
// generic function no dependency on any object.
let userDetails = function(country, age) {
    console.log(`${this.name} and ${this.designation},  Country: ${country},  Age: ${age} `)
};


let user = {
    name: "Farhan ali",
    designation: "Artist",
}

let user2 = {
    name: "Muhammad Usman",
    designation: "Front end developer",
}


/**
 * ---------------------------------- call() -----------------
*/

// jub object ko chayey hoga aik utility/generic function , apni properties ko manipulate 
// karnay k liyey, tub hum yey methods use karyn gay.
// userDetails.call(user); // user object ko userDetails() function millay ga.
// userDetails.call(user2); // user2 object ko userDetails() function millay ga.
 
// second arguments are optional
// userDetails.call(user, "Bangladesh", "33");
// userDetails.call(user2, "Pakistan", "31");


/**
 * ------------------------------------ apply() ------------------------
*/
// is may bus yey farq hay jo hum second arguments pass kartay hayn wo 
// aik array say pass krayn gay bus. jo k wo b optional hoga.
// userDetails.apply(user, ["Bangladesh", "33"]);
// userDetails.apply(user2, ["Pakistan", "31"]);


/**
 * ----------------------------------- bind() ----------------------------
 */
// yey method b call() method hi ki tarhan hay bus farq itna hay object ko jo utility function
// chayey hota hay us ko yey invoked nai karta bus, apnay pass rakhlayta hay , us function ko
// phirh hammay khud invoke karwana hota hay.
// is k elawa yey aik bound function ko return karta hay , jis hum invoke karty hayn.

let user1Details = userDetails.bind(user);
user1Details("Bangladesh", "33")









