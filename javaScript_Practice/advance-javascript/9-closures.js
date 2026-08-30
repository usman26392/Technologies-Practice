/**
 * a closure gives you access to an outer function's scope from an inner function.
 * closures remember the outer function scope even after creation time.
 */


// example: 1
// function human() {
//     let name = "Muhammad Usman";
//     function sayHi() {
//         console.log(`Hi i am ${name}`)
//     }
//     function sayHowYouFeel() {
//         console.log(`${name} is feeling good.`)
//     }
//     sayHi();
//     sayHowYouFeel();
// }

// human();

// example: 2
function human(userName) {
    function sayHi() {
        console.log(`Hi i am ${userName}`)
    }
    function sayHowYouFeel() {
        console.log(`${userName} is feeling good.`)
    }
    return {
        sayHi,
        sayHowYouFeel
    }
}

let name1 = human("Muhammad Usman");

name1.sayHi()
name1.sayHowYouFeel()



