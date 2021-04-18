/**
 * --------- attributes
 */

// $(document).ready(function(){
//     $(".empty-anchor").attr("href","index.html");
// });



// $(document).ready(function(){
//     $(".empty-anchor").attr({
//             href: "index.html",
//             title:"This is a link with attributes by jquery"
//         });
// });



/**
 * --- jub hum "get" krray hun gay attribute ki value .
 */

$(document).ready(function() {
    let attrValue = $("a").attr("href");
    console.log(attrValue);
});