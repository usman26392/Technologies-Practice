
/**
 * -------------------------- javaScript ------------------------------
 */

// level: very easy

//----- task-1

// let sum = function(num1, num2) {
//     return (`${ (num1) + (num2)  }`);
// };

// console.log(sum(2,3));
// console.log(sum(-2,-3));



//------ task-2: Write a function that takes an integer minutes and
//  converts it to seconds.

/**
 *  1 minute = 60 seconds
    2 minute = 2 * 60 sec
 */

    // let ConvertMinute = function(minutes) {
    //     return (`${minutes} minutes =  ${minutes * 60} seconds`);
    // };

    // console.log(ConvertMinute(2));
    // console.log(ConvertMinute(3));
    // console.log(ConvertMinute(5));

//------- task-3: Create a function that takes a number as an argument,
//  increments the number by +1 and returns the result. 

    // let nextNumber = function(number){
    //     return (`${number + (1)}`);
    // };

    // // console.log(nextNumber(0));
    // // console.log(nextNumber(1));
    // console.log(nextNumber(2));


//------ task-4: Write a function that takes the
//  base and height of a triangle and return its area.

// The area of a triangle is: (base * height) / 2

    let triangleArea = function(base, height) {
        return (`${(base * height) / 2 }`);
    };

    console.log(triangleArea(10,10));
    console.log(triangleArea(7,4));


// ------------- Task-5:  