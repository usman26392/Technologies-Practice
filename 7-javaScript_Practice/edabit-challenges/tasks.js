
/**
 * -------------------------- javaScript ------------------------------
 */

/** 
 * ------------------------------------ level: very easy -----------------------------
 */

//----- task-1
// Create a function that takes two numbers as arguments and returns their sum.

    // let sum = function(num1, num2) {
    //     return (`${ (num1) + (num2)  }`);
    // };

    // console.log(sum(2,3));
    // console.log(sum(-2,-3));



//------ task-2: Write a function that takes an integer minutes and converts it to seconds.

    //   1 minute = 60 seconds
    // 2 minute = 2 * 60 sec


    // let ConvertMinute = function(minutes) {
    //     return (`${minutes} minutes =  ${minutes * 60} seconds`);
    // };

    // console.log(ConvertMinute(2));
    // console.log(ConvertMinute(3));
    // console.log(ConvertMinute(5));


//------- task-3: 
// Create a function that takes a number as an argument, increments the number by +1 and returns the result. 

    // let nextNumber = function(number){
    //     return (`${number + (1)}`);
    // };

    // // console.log(nextNumber(0));
    // // console.log(nextNumber(1));
    // console.log(nextNumber(2));


//------ task-4: 
//  Write a function that takes the base and height of a triangle and return its area.

// The area of a triangle is: area = (base * height) / 2

    // let triangleArea = function(base, height) {
    //     return (`${(base * height) / 2 }`);
    // };

    // console.log(triangleArea(10,10));
    // console.log(triangleArea(7,4));


// ------------- Task-5:  
// Create a function that takes the age in years and returns the age in days.

// 1 year(age) = 365 days
// than 
// 80 years = 80 * 365 days. = 29,200 days

    // let calcAge = function(age) {
    //     return (`${age} years is equal to  ${age * 365} days. `)
    // };

    // console.log( calcAge(65) )
    // console.log( calcAge(20) )
    // console.log( calcAge(100) )

// ---------- Task-6:
// Fix the code in the code tab to pass this challenge (only syntax errors). 
// Look at the examples below to get an idea of what the function should do.



    // function cubes(a) {
    //     return a ** 3
    // };

    // console.log( cubes(5) )

// ----------- Task-7:
// Create a function that takes an array containing only numbers and return the first element.

    // let getFirstValue = function(arr) {
    //     return arr[0]
    // };

    // console.log( getFirstValue([5,3,8]) )


// ------------ Task-8:
// Create a function that takes voltage and current and returns the calculated power.
// p = vi

    // let calcPower = function(voltage, current) {
    //     return voltage * current;
    // };

    // console.log( calcPower(230, 10) )
    // console.log( calcPower(110, 3) )


// --------------- Task-9:
 
// 1 min = 60s
// 60 min = 60 * 60 = 3600s
// 60 min = 1 hour
// 1 hour = 3600s
// than
// 2 hour = 2 * 3600s


    let calcSeconds = function(hour) {
        return hour * 3600;
    };


    console.log(calcSeconds(2))
    console.log(calcSeconds(24))





