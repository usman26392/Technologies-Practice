
// with default export function
// function greetPerson(name) {
//     return `Hello ${name}`
// }

// export default greetPerson;


// named export function
// export function greetPerson(name) {
//     return `Hello ${name}`
// }

// OR
function greetPerson(name) {
    return `Hello ${name}`
}
export {greetPerson};


function Show() {
    console.log('yes from show!')
}

export {Show};








