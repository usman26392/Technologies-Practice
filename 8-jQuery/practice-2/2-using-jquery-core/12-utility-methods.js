/**
 * ------------- Utility Methods ------------------
 */



// trim
$(function() {
    let myStr =  $.trim( "    lots of extra whitespace    " );
    $("h1").text(myStr);
});





// Testing type
$(function() {
    // let checkType =  $.type(/test/);
    // let checkType =  $.type(Boolean);
    // let checkType =  $.type(true);
    // let checkType =  $.type("test");
    let checkType =  $.type([]);
    console.log(checkType);
});
