/**
 * --------- Exception Handling --------------------
 */



    // try {
    //     add();
    //     console.log("This line is after of exception");
    //     console.log("This line is after of exception");
    //     console.log("This line is after of exception");
    // } catch (e) {
    //     console.log(`Exception Message:  ${e.message}`);
    //     console.log(`Exception type:  ${e.name}`);
    //     console.log(e.stack);
    //     // or hum apna b program likh sakhtay hayn, catch block may
    //     // exception handling k liyey.
    //     console.log("please declare add() function");
    // }

    // finally {
    //     console.log("This is necessary code.");
    // }


/**
 * -------------- throw -----------------------
 *  */    


function  getRectArea(w,h) {
    if(isNaN(w) || isNaN(h)) {
        throw `Parameters are not a number`;
    }
    else {
        return w * h;
    }
}

try {
    let A =  getRectArea(10,"p");
    console.log(A);

} catch (e) {
    console.log(e);
}