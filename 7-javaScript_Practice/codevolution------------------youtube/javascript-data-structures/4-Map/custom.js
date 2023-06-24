
let map = new Map([['a', 1], ['b', 5]]);
console.log(map)

map.set("c", 10);
console.log(map.has("a"))
console.log(map);
console.log(map.__proto__);