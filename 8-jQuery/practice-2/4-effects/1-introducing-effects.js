$(function() {
    $("button").on("click", function() {
        // $(".list-2").hide();
        // $(".list-2").show();

        // duration:  keywords and numbers as a argument
        // $(".list-2").hide("slow");
        // $(".list-2").hide(100);

        //  $(".list-2").slideUp();
        // $(".list-2").slideDown();

        // $(".list-2").fadeOut(1500);
        // $(".list-2").fadeIn();

        // $(".list-2").toggle("slow");

        // $(".list-2").slideToggle("slow");

        // $(".list-2").fadeToggle();

        // $(".list-22").fadeToggle(720, function() {
        //     $(this).addClass("mylist");
        // });

        // Run a callback even if there were no elements to animate
        // let some_Element = $(".list12");

        // let cb = function() {
        //     console.log("callback execute!");
        // }

        // if(some_Element.length) {
        //     some_Element.fadeToggle(700,cb);
        // }
        // else {
        //     cb();
        // }
    });
    
});

/**
 * Managing Animation Effects
 */

$(function() {
    // $(".alert").on("click", function() {
    //     $(".list-2").fadeToggle();
    // });

    // stop()
    // $(".alert_2").on("click", function() {
    //     $(".list-2").stop();
    // });

    // delay()
    // $(".alert").on("click", function() {
    //     $(".list-2").slideUp().delay(1800).slideDown();
    // });

});


// custom effects with .animate()

$(function() {
    $(".alert").on("click", function() {
        $(".list-1").animate(
            {
                width: "500px",
                left: "500",
                opacity: "0.25",
            },
            400,
            function(){
                $(this).css({
                    width: "auto",
                    opacity: "1",
                    left: "0px",
                    transition: "all .3s linear"
                });
                console.log("animation done");
            }
        );
    });


    // example 2
    // $(".alert").on("click", function() {
    //     $(".list-1 li").css({
    //         position: "relative",
    //     }).animate(
    //         {
    //             bottom: "12px",
    //             opacity: .25
    //         },
    //         400,
    //         function() {
    //             $(this).css(
    //                 {
    //                     opacity: 1,
    //                     bottom: "0px",
    //                     transition: "all 0.2s linear"
    //                 });
    //         }
    //     );
    // });
});



// drop down
$(function() {
    $(".drop_down_anchor").on("mouseenter", function() {
        $(this).find("ul").stop(true,true).delay(200).slideDown(500);
      }).on("mouseleave", function() {
        $(this).find("ul").stop(true,true).delay(200).slideUp(500);
      });
});