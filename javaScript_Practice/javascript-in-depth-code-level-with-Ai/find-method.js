
const users = [
  { id: 1, name: "Ali" },
  { id: 2, name: "Ahmed" },
  { id: 3, name: "Sara" }
];


// Find the user with id 2
const specificUser = users.find((user, idx)=> (user.id === 2));


console.log(specificUser);

