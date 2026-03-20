/**
 * default parameters:
 * default parameter hum koi array , or null b rakh sakhtay
 * hayn.
 */


//  c parameter may hum nay aik default value set kardi hay.
 function numbers(a,b,c=20) {
     console.log("A " + a);
     console.log("B " + b);
     console.log("C " + c);
 }

//  call a function
numbers(1,3);


// yahan par hum c k liye b argument day rahay hayn 
// is say yey hoga k c ki value overwrite ho jahay gi.
numbers(1,3,5);