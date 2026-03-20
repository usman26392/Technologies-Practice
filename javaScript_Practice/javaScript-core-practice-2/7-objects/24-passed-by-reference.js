

// passed by Value VS Passed by Reference.


// passed by Value
// let num1 = 10;
// let num2 = num1;

// console.log("increment 1 in num2: " + (num2 + 1));
// console.log("num1 is no change: " + num1);



// passed by Reference
let obj1 = {
    num: 10
};

let obj2 = obj1;

console.log( (obj2.num++));

console.log(obj1);