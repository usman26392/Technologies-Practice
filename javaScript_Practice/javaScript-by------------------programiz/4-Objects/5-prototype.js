


function Person(names, ages) {
    this.firstName = names,
    this.age = ages 
}

// function's prototype Object
// console.log(Person.prototype);

// Object's prototype Object
let user1 = new Person("Usman", 30);
console.log(user1);

let user2 = new Person("Farhan", 32);
// console.log(user2);

// now add a property in prototype object.
// user2.__proto__.lastName = "Ali";

// if we check this property for user1 object
// console.log(user1.lastName);


// if we add prototype property in constructor function's prototype object.
Person.prototype.gender = "male";



// another constructor function
function Invoice(voiceNumber) {
    this.voice = voiceNumber;
}

let myVoice = new Invoice(32);

