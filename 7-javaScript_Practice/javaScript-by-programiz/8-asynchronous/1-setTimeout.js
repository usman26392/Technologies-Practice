

// example-1
// window.setTimeout(function() {
//     console.log('Hello javaScript!');
// }, 3000);
// console.log('This execute first!');


// example-2
// function printMessage() {
//     console.log('Hello javaScript!')
// }
// window.setTimeout(printMessage, 3000);

// example
// function printMessage(message) {
//     console.log(`Hello ${message}`);
// }
// window.setTimeout(printMessage, 3000, 'Usman!');



// example-3 with interval Id
// function printMessage() {
//     console.log('Hello javaScript!')
// }
// let interValId =  window.setTimeout(printMessage, 2000);
// console.log(interValId);



// example-4: display time every 3 seconds
// function showTime() {
//     let dateTime = new Date(),
//         time = dateTime.toLocaleTimeString();
//     console.log(time);
//     setTimeout(showTime, 3000);
// }

// showTime();


/**
 * ------------------------------- clearTimeout() ------------------------
 */

//  example

    // let count = 0;
    // function increaseCount() {
    //     count = count + 1;
    //     console.log(count);
    // }

    // let intervalId = setTimeout(increaseCount, 3000);
    // clearTimeout(intervalId);
    // console.log('stop timeout')


    