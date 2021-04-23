/**
 * --------------- CSS Styling -------------
 */


/**
 * ----------- getting CSS Properties
 */

  
// $(function() {
//     // let propValue =  $(".hdg-1").css("fontSize");
//     let propValue =  $(".hdg-1").css("font-size");
//     console.log(propValue);
// });



/**
 * --------- Setting CSS Properties ----------------
 */

  // with single property
  $(function() {
      $(".hdg-1").css("color","#50ff00");
  });

  // with multiple properties
  $(function() {
      $(".hdg-1").css({
          backgroundColor: "#000000",
          color: "#ffffff"
     });
  });

  


  