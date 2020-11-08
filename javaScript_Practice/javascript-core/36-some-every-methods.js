
// some(fuctionName);

let ages = [12, 45,12, 26];

function checkAge(age) {
    let adultAge = 20;
    return age >= adultAge;
}

console.log(ages.some(checkAge));



// every(function)
console.log(ages.every(checkAge));