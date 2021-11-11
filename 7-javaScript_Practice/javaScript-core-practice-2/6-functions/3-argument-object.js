/**
 * argument object in function:
 * jun function arguments layta hay toh un arguments
 * ka aik object banta hay arguments k naam say
 * or us object may sary arguments store hotay hayn 
 * array indexing ki tarhan.
 */


 function displayName(name1, name2) {
     console.log(name1); // javaScript
     console.log(name2); // C language

    //  agar hum dykna chahatay k argument object
    // may kiya kiya store howa hay.
     console.log(arguments[0]); // javaScript
     console.log(arguments[1]); // C language

     console.log(arguments);
    //  agar hum is ki type check karyn
     console.log(typeof arguments); // object

 }
 



//  call a function
 displayName("javaScript", "C language");