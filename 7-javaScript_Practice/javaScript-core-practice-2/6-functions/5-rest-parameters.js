/**
 *  Rest parameter:
 * yey aik  array hota hay , jis ko
 * jitnay b arguments diyey jaen wo lay layta hay.
 */

 function show(...args){
     console.log(args);
    //  console.log(args[0]);
 }

// show(10);
show(10,20,30);


/**
 * hum is rest parameter k sath ,
 * dosray parameters b lay sakhtay hayn
 */

 function showTwo(num_1, ...args) {
     console.log(args);
     console.log("This is num_1's  value : " + num_1);
 }

 showTwo(50, 8,4,2);