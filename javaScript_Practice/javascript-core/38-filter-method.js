let ages = [10, 23,45,80];

function checkAge(age) {
    return age > 10;
}

console.log(ages.filter(checkAge));