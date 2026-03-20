

let arrValue = ['My', 'name', 'is', 'usman'];

console.log(arrValue);
console.log(...arrValue);



let check = function(...args) {
    console.log(args);
}

check(3);
check(5, 2, 6);