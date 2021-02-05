/**
 * updating properties and methods of object.
 * 
 */
let userOne = {
    email: "usman@corp.com",
    name: "Muhammad Usman",
    brothers: ["Muhammad Farhan","Fahad Ali","Muhammad Rehan"],
    Login: function() {
        console.log(`${this.email} has logged in.`);
    },
    LogOut() {
        console.log(`${this.email} has logged out.`);
    }
};


// updating property
userOne.name = "Fahad Ali";

// another way for updating property with square brakets
userOne["name"] = "Fahad Ali";


// developing new property for the object
userOne.age = "28";

userOne.LogInfo = function() {
    console.log("This is public account");
};

// ?????
// let abc = "name";
// userOne[abc];