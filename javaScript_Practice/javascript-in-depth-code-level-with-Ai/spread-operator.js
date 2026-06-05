

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


// Using spread operator to create a new object with updated properties
// The spread operator allows us to create a new object by copying the properties of an existing object and then adding or overriding specific properties.

let newUser = {
  ...user,
  name1: "Ali",
  city: "Lahore",
  // We can also add new properties that were not in the original object
  religion: "Islam",
};

console.log("new user", newUser);
console.log("Existing old user", user);
