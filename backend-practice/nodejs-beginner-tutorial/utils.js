
 function generateRandomNumber() {
    return Math.floor((Math.random() * 100) + 1);
}


function celciusToFahrenheit(celsius) {
    return (celsius * 9/5) + 32;
}



// Syntax is a CommonJS module: one export
// module.exports = generateRandomNumber;

// Syntax is a CommonJS module: more than one export
// module.exports = {
//     generateRandomNumber,
//     celciusToFahrenheit
// }


// example: ES default module export
const posts = [
    {
        id: 1,
        title: "First Post",
    },
    {
        id: 2,
        title: "Second Post",
    },
    {
        id: 3,
        title: "Third Post",
    }
]


export default function getPosts() {
    return posts;
}

// OR
// function getPosts() {
//     return posts;
// }
// export default getPosts;


export function getPostById(id) {
    return posts.find(post => post.id === id);
}

// OR
// function getPostById(id) {
//     return posts.find(post => post.id === id);
// }
// export { getPostById };