/**
 * ---- iterating over jQuery and non-jQuery objects
 */


let sum = 0;
let myNumbers = [1,2,3,4,5];

// by javaScript Core.
// for(let i = 0; i < myNumbers.length; i++) {
//     sum = sum + myNumbers[i];
// }
// console.log(sum);


// by jQuery utility method.
// $(function() {
//     $.each(myNumbers,function(indexNumber,arrValue) {
//         sum = sum + arrValue;
//         console.log(`index Number: ${indexNumber}`);
//     });
//     console.log(`sum of array Numbers:  ${sum}`);
// });



/**
 * ------ .each() method for jQuery object selection ----------
 */

// incorrect:
// $.each($(".list-1 li"),function(i,el) {
//     // do something
//     $(el).addClass("foo");
// });


// correct way:

// $(function() {
//     $(".list-1 li").each(function(indexUmber,element) {
//     $(element).addClass("bold-li");
//     });
// });





