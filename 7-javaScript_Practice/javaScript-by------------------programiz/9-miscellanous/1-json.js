

// example-1
// let userData = [
//     {
//         "id": "1",
//         "name": "usman",
//         "age": "30",
//         "gender": "male"
//     },
//     {
//         "id": "2",
//         "name": "Rehan",
//         "age": "25",
//         "gender": "male"
//     },
//     {
//         "id": "3",
//         "name": "Farhan",
//         "age": "32",
//         "gender": "male"
//     }

// ]

// console.log(userData);
// userData.map(function(d) {
//     return (console.log(d.name))
// });


// example-2: Converting JSON into javaScript Object.
const jsonData = `{
    "name": "usman",
    "age": "30"
}`

const obj = JSON.parse(jsonData);
console.log(obj);



// exampl-3: Converting javaScript into JSON
let jsonD = JSON.stringify(obj);
console.log(jsonD)
