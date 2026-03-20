
let obj = {
    name: "Muhammad Usman",
    age: 30,
    printName: function() {
        console.log(this.name)
    }
}



console.log(obj);
// accessing properties of object.
console.log(obj.name);
console.log(obj["age"]);

// adding a property
obj.religion = "Islam";

// deleting a property
delete obj.age

// remaining functions
// Object.keys() , .values() and .entries()