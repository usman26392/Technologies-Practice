/**
 * while loop
 */

//  let inc = 0;
//  while(inc < 5) {
//     console.log("This is a while loop " + inc);
//     inc++;
//  }


/**
 *  jub hummay iteration ka na pata ho 
 *  k kitni iteration hun gi, bus itna pata ho k
 *  agar yey condition ajae toh loop stop kardayna. 
 */

// let inc = 0;
// while(true) {
//     if(inc == 20) {
//         console.log("this at " + inc);
//         break;
//     }
//     console.log("loop running " + inc);
//     inc++;
// }


/**
 *  Nested while loop
 */

 let inc = 0;
 while(inc < 3) {
     console.log("outer loop "+ inc)
     let inc_2 = 0;
     while(inc_2 < 5) {
         console.log("nested inner while loop " + inc_2);
         inc_2++;
     }
     inc++;
 }