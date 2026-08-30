/**
 * updating properties and methods of object.
 * 
 */
let userOne1 = {
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
userOne1.name = "Fahad Ali";

// another way for updating property with square brakets
userOne1["name"] = "Fahad Ali";


// developing new property for the object
userOne1.age = "28";

userOne1.LogInfo = function() {
    console.log("This is public account");
};

// ?????
// let abc = "name";
// userOne[abc];