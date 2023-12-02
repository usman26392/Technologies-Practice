

/**
 * ------------ difference between  'prototype' and  '__proto__'
 */


class Person {
    talk() {
        return "can talk"
    }
}

// add function in prototype object with the help of 'class'.
Person.prototype.fly = function() {
    return "Can fly"
}


let farhan = new Person();
// add function in prototype object with the help of 'object'
farhan.__proto__.run = function() {
    return "Can run"
}

console.log(Person)
console.log(farhan)
console.log(farhan.talk())
console.log(farhan.fly())
console.log(farhan.run())

