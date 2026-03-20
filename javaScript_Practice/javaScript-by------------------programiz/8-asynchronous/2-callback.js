
// example

    // function printSomeThing(userName, callBack) {
    //     console.log(`Hi ${userName}`);
    //     callBack();
    // }

    // function callMe() {
    //     console.log(`This message from a callback function!`);
    // }

    // // passing a string and passing function as an argument.
    // printSomeThing('Usman', callMe);


// example with setTimeout() 
    
// code is executed asynchronously
    // function printSomeThing(userName) {
    //     console.log(`Hi ${userName}`);
    // }

    // function callMe() {
    //     console.log(`This message from a function!`);
    // }

    // // here printSomeThing is a callback function
    // setTimeout(printSomeThing, 2000, 'usman');
    // callMe();


// code is executed synchronously
    function printSomeThing(userName, callBack) {
        console.log(`Hi ${userName}: from a callback function. ` );
        callBack();
    }

    function callMe() {
        console.log(`This message from a callback function!`);
    }

    // here printSomeThing and callMe() are  callback functions.
    setTimeout(printSomeThing, 2000, 'usman', callMe);



     