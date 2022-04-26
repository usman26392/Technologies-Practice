

let person = {
    user_name: 'Usman',
    age: '30',
    gender: 'male'
}

// object destructuring
let {user_name, age, gender} = person;
console.log(age);


let arrValues = ['one', 'two', 'three'];

// array destructuring
let [x, y, z] = arrValues;
console.log(x);