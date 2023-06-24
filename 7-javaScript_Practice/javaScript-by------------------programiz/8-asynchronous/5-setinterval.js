

// function printName(name) {
//     console.log(`Hello ${name}`);
// }

//  window.setInterval(printName, 1000, "usman");


// example-2
// function showTime() {
//     let dateTime = new Date();
//     let time = dateTime.toLocaleTimeString();
//     console.log(time)
// }

// let display = setInterval(showTime, 1000)



// example-3 with clearInterval()
let count = 0;
function showTime() {
    let dateTime = new Date();
    let time = dateTime.toLocaleTimeString();
    console.log(time);
    count = count + 1;
    if(count === 5) {
        clearInterval(display)
        console.log(display)
    }
}

let display = setInterval(showTime, 1000)



