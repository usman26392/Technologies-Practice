/**
 * --------- Callback function ------------
 */

  
  function geeky(callback) {
      callback();
  }

  geeky(function() {
      console.log("abc");
  });


//   example 2: with parameter

// function geeky(callback) {
//     callback(10);
// }

// geeky(function(a) {
//     console.log("abc",a);
// });



/**
 * -------- synchronous approach ------------
 */

    // function geeky(callback) {
    //     callback();
    // }

    // geeky(function() {
    //     console.log("abc");
    // });

    // console.log("def");


/**
 * ---------- Asynchronous approach ------------------- 
*/    

    window.setTimeout(() => {
        console.log("abc");
    }, 3000);

    console.log("def");
