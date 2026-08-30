

let user = {
  name1: "Usman",
  age: "33",
  city: "Karachi",
  country: "Pakistan",
  profession: "Software Engineer",
  hobbies: ["Coding", "Traveling", "Cooking"],
  contact: {
    email: "usman@example.com",
    phone: "123-456-7890",
  },
  getFullName: function () {
    console.log(this.name1 + " from " + this.country);
  },
};

// example: 
// we can destructure the object to extract specific properties into variables
// const { name1, country, getFullName } = user;
// console.log(name1,"from", country);


// example: 
// we can also rename the variable while destructuring
const { name1: fullName, country, getFullName } = user;
console.log(fullName, "from", country);


const newUser = {...user, name1: "Ali" }

console.log(newUser)