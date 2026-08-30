


// // need only even numbers
// const numbers = [1, 2, 3, 4, 5, 6];
// const evenNumbers = numbers.filter((num, idx) => {
//   return num % 2 === 0;
// });

// console.log("Even Numbers", evenNumbers);

// Filter active Users
const users = [
  { name: "Ali", active: true },
  { name: "Sara", active: false },
  { name: "John", active: true },
];


const activeUsers = users.filter((user, idx)=> {
    return user.active === true;
});

console.log("Active Users", activeUsers);