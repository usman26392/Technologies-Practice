
/**
 * --------------- how jquery works -----------------------
 */

// old way
// $(document).ready(function() {
//     $("a").click(function() {
//         alert("Thanks for visiting!")
//     })
// })

// new way
// $(function() {
//     $("a").on("click", function() {
//         alert("Thanks for visiting")
//     })

// })



// $(function() {
//     $('a').on('click', function(env) {
//         env.preventDefault()
//         alert('Thanks for visiting, but this will not work')
//     })
// });


$(function() {
    // adding and removing css class
    // $('a').addClass('test')
    // $('a').removeClass('test')

    // special effects
    $('a').on('click', function(env) {
        env.preventDefault()
        $(this).hide('slow')
    })


    $('a').attr("title", "this is a anchor!")

    $('img').attr({
        src: "assets/images/my-pic.jpg",
        title: "my image",
        alt: "this is my image"
    })
    
    // jquery psuedo classes/selectors
    // $("ul li:first").css("color", "red")
    // $("ul li:last").css("color", "red")
    // $("ul li:odd").css("color", "red")
    // $("ul li:even").css("color", "red")
    // $("ul li:gt(1)").css("color", "red");

    // let el = $("div p:hidden");
    // console.log(el);

    // let el2 = $("div > p:visible");
    // console.log(el2);

    $("<p>This is a new paragraph</p>")

    $("<a/>", {
        html: "This is a new <strong>element</strong> link",
        "class": "link",
        href: "index.html"
    }).appendTo("body");
})















