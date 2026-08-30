/**
 * ------------- overview of jQuery -------------
 */



//  $(document).ready(function() {
//   $("a").click(function(){
//     alert( "Thanks for visiting!" );
//   });
// });




/**
 * ------ preventDefault() ----------
 * is say hum default behaviour (koi b ho) , stop karsakhtay hayn
 */

// $(document).ready(function() {
//   $("a").click(function(e){
//     alert( "As you can see, the link no longer took you to jquery.com");
//     e.preventDefault();
//   });
// });



// selecting element
// $(document).ready(function(){
//   let checkElement = $(".list");
//   console.log(checkElement);
// });


// adding and removing an HTML class:
// $(document).ready(function(){
//   $("a").addClass("red-anchor");
// });

// removing an HTML class:
// $(document).ready(function(){
//   $("a").removeClass("red-anchor");
// });


// effects
$(document).ready(function(){
  $("a").click(function(e){
    e.preventDefault();
    $(this).hide("slow");
  });
});