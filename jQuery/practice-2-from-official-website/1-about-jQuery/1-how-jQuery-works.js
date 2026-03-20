



// ----------- How jQuery Works ---------------

// $(document).ready(function() {
//     $("a").click(function(e_Obj) {
//         alert("Thanks for visiting!");
//         // e_Obj.preventDefault();
//     });
// }); 



// --------------- Adding and removing an HTML class --------------

// $(function() {
//     $("a").addClass("red-anchor");
//     $("a").removeClass("red-anchor");
// });



// ------------ special effects -----------------------

$(function() {
    $("a").click(function(e) {
        e.preventDefault();
        $(this).hide(10000);
    });
});