
var currentTab = 0;
function showTab(t) {
    var e = document.getElementsByClassName("tab");
    (e[t].style.display = "block"),
        0 == t
            ? ((document.getElementById("prevBtn").style.display = "none"), (document.getElementById("signupBtn").style.display = "none"), (document.getElementById("nextBtn").style.display = "inline"))
            : (document.getElementById("prevBtn").style.display = "inline"),
        t == e.length - 1
            ? ((document.getElementById("nextBtn").style.display = "none"), (document.getElementById("signupBtn").style.display = "inline"))
            : (document.getElementById("nextBtn").innerHTML = "Next" );
}

function nextPrev(t) {
    var e = document.getElementsByClassName("tab");
    if (1 == t && !validateForm()) return !1;
    (e[currentTab].style.display = "none"), showTab((currentTab += t));
}

function validateForm() {
    var t,
        e,
        a = !0;
    for (t = document.getElementsByClassName("tab")[currentTab].getElementsByTagName("input"), e = 0; e < t.length; e++) "" == t[e].value && ((t[e].className += " invalid"), (a = !1));
    return a;
}




$(document).ready(function () 
{ 
    if($(window).width() > 0){
        if(('.project-slider').length != 0){
            $('.project-slider').addClass('owl-carousel owl-theme');
            $('.project-slider').owlCarousel({
                loop:false,
                nav:true,
                navText: ['<img src="assets/images/left-arrow.png">', '<img src="assets/images/right-arrow.png">'],
                dots: false,
                margin:25,
                autoplay:false,
                autoplayTimeout:4000,
                autoplayHoverPause:true,
                mouseDrag: true,
                responsiveClass:true,
                responsive:{
                    0:{
                        items:2,
                        margin:10
                       
                    },
                    576:{
                        items:3,
                        margin: 10
                    },
                    768: {
                        items: 3
                    },
                    1200: {
                        items: 4
                    }
                }
            });
        }
    }
        
    if($(window).width() > 0){
        if(('.packg-slider').length != 0){
            $('.packg-slider').addClass('owl-carousel owl-theme');
            $('.packg-slider').owlCarousel({
                loop:false,
                nav:true,
                navText: ['<img src="assets/images/left-arrow-c.png">', '<img src="assets/images/right-arrow-c.png">'],
                dots: false,
                margin:25,
                autoplay:false,
                autoplayTimeout:4000,
                autoplayHoverPause:true,
                mouseDrag: true,
                responsiveClass:true,
                responsive:{
                    0:{
                        items:1
                    },                   
                    576:{
                        items:2
                    },
                    768: {
                        items: 2
                    }
                }
            });
        }
    };

    // slim-scroll initialization 
    $(".pack-col ul").slimScroll({ height: "300px", color: "#a724b4" }),
            0 != $(".scroll").length &&
            $(".scroll").slimScroll({
            height: "100px",
            size: "6px",
            color: "#a724b4",
            alwaysVisible: !0,
            distance: "16px",
            railVisible: !0,
            railColor: " #a724b4",
            railOpacity: 1,
            railBorderRadius: "0px",
            wheelStep: 10,
            disableFadeOut: !1,
            });
      

    if($(window).width() <= 575){
        if(('.how-we-work-slider').length != 0){
            $('.how-we-work-slider').addClass('owl-carousel owl-theme');
            $('.how-we-work-slider').owlCarousel({
                loop:false,
                nav:false,
                dots: true,
                autoplay:false,
                autoplayTimeout:4000,
                autoplayHoverPause:true,
                mouseDrag: true,
                responsiveClass:false,
                responsive:{
                    0:{
                        items:3
                    },
                }
            });
        }
    };

    if($(window).width() > 0){
        if(('.pack-slider').length != 0){
            $('.pack-slider').addClass('owl-carousel owl-theme');
            $('.pack-slider').owlCarousel({
                loop:false,
                nav:true,
                navText: ['<img src="assets/images/left-arrow.png">', '<img src="assets/images/right-arrow.png">'],
                dots: true,
                autoplay:false,
                autoplayTimeout:4000,
                autoplayHoverPause:true,
                mouseDrag: true,
                responsiveClass:true,
                responsive:{
                    0:{
                        items:1,
                        margin: 20                    
                    },
                    576:{
                        items:1,
                        margin: 20
                        
                    },
                    768: {
                        items: 2,
                        margin: 20
                    },
                    1200: {
                        items: 3,
                        margin: 20
                    },
                    1367: {
                        margin: 0
                    }

                }
            });
        }
    }
    

    if($(window).width() > 0){
        if(('.reviews-wraper-slider').length != 0){
            $('.reviews-wraper-slider').addClass('owl-carousel owl-theme');
            $('.reviews-wraper-slider').owlCarousel({
                loop:false,
                nav: false,
                navText: ['<img src="assets/images/left-arrow.png">', '<img src="assets/images/right-arrow.png">'],
                dots: true,
                autoplay:false,
                autoplayTimeout:4000,
                autoplayHoverPause:true,
                mouseDrag: true,
                responsiveClass:true,
                responsive:{
                    0:{
                        items:1                    
                    },
                    576:{
                        items:1                    
                    }
                }
            });
        }
    }

    if($(window).width() <= 991){
        if(('.serv-slider').length != 0){
            $('.serv-slider').addClass('owl-carousel owl-theme');
            $('.serv-slider').owlCarousel({
                loop:false,
                nav: false,
                navText: ['<img src="assets/images/left-arrow.png">', '<img src="assets/images/right-arrow.png">'],
                dots: true,
                autoplay:false,
                autoplayTimeout:4000,
                autoplayHoverPause:true,
                mouseDrag: true,
                responsiveClass:true,
                responsive:{
                    0:{
                        items:1                    
                    },
                    576:{
                        items:1                    
                    },
                    768: {
                        items: 2
                    }
                }
            });
        }
    }

    if($(window).width() <= 767){
        if(('.unique-design-slider').length != 0){
            $('.unique-design-slider').addClass('owl-carousel owl-theme');
            $('.unique-design-slider').owlCarousel({
                loop:false,
                nav: false,
                navText: ['<img src="assets/images/left-arrow.png">', '<img src="assets/images/right-arrow.png">'],
                dots: true,
                autoplay:false,
                autoplayTimeout:4000,
                autoplayHoverPause:true,
                mouseDrag: true,
                responsiveClass:true,
                responsive:{
                    0:{
                        items:1                    
                    },
                    576:{
                        items:2                    
                    }
                }
            });
        }
    }




    
});



$(document).ready(function(){
    AOS.init();
    AOS.init({
        once: true,
        duration: 1200,
    });
    (function($) {
        'use strict';
        $('.count-num').rCounter({
            duration: 30

        });
    })(jQuery);
});




         




  /* popup js */
$(".popup-open").click(function() {
    $("#popup").addClass("acttive")
    $("body").css({overflow: "hidden"});
  });
  $("#popup-closed").click(function() {
    $("#popup").removeClass("acttive"), setTimeout(() => {
      $("body").css({
        overflow: "auto"
      })
    }, 400)
  })
/* popup js */

$(window).keydown(function(event){
    if(event.keyCode == 13) {
      event.preventDefault();
      return false;
    }
  });





    

    $(window).scroll(function() {    
        var scroll = $(window).scrollTop();
        if ((scroll >= 500)  && (scroll <= 505)) {         
            var mySVG = $('svg').drawsvg();
            mySVG.drawsvg('animate');
        } else {
            return false;          
        }
    });
    

    

// banner text animation.
    // var textWrapper = document.querySelector('.ml6 .letters');
    // textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");
    
    // anime.timeline({loop: true})
    //   .add({
    //     targets: '.ml6 .letter',
    //     translateY: ["1.1em", 0],
    //     translateZ: 0,
    //     duration: 950,
    //     delay: (el, i) => 50 * i
    //   }).add({
    //     targets: '.ml6',
    //     opacity: 0,
    //     duration: 2000,
    //     easing: "easeOutExpo",
    //     delay: 1000
    //   });    

// GSAP Animation
let tl = gsap.timeline({
    scrollTrigger: {
        trigger: ".why-trust-wrap > h2",
        trigger: ".why-trust-wrap > h2 span",
        trigger: ".why-trust-wrap > p",
        trigger: "why-trust-btns > a",
        toggleActions: "restart none none pause",
        start: "20% center",
        end: "30% bottom",
        scrub: 5,
        markers: true
    }
});

tl.from(".why-trust-wrap > h2",{
    x: -400,
    duration: 1
});

tl.from(".why-trust-wrap > h2 span",{  
    opacity: 0,
    duration: .5,
    stagger: .1
},"0");

tl.from(".why-trust-wrap > p",{  
    x: -100,
    duration: 1,
    opacity: 0,
    stagger: .5
}, 1);

tl.from(".why-trust-btns > a",{  
    y: 100,
    duration: 1,
    opacity: 0,
    scaleX: 0,
    stagger: {
        each: .5,
        from: "left"
    }
},2);

tl.from(".why-trust-img-wrap img:first-child",{  
    y: -200,
    duration: .5,
    opacity: 0,
    scale: 0
},3);

tl.from(".why-trust-img-wrap img:last-child",{  
    y: 200,
    duration: .4,
    opacity: 0,
}, 4);


// for cta
let cta = gsap.timeline({
    scrollTrigger: {
        trigger: ".cta-wrap >  h3",
        trigger: ".cta-wrap > h2",
        trigger: ".cta-btns-wrap > a",
        toggleActions: "restart none none pause",
        start: "bottom 100%"
    }
});

cta.from(".cta-wrap >  h3",{
    y: -100,
    scale: 0,
    duration: .8
});

cta.from(".cta-wrap >  h2",{
    y: -100,
    scale: 0,
    duration: .8
});

cta.from(".cta-btns-wrap > a",{
    y: 100,
    scale: 0,
    duration: 0.5,
    stagger: {
        each: .2,
        from: "left"
    }
},"1");



// for banner
let banner = gsap.timeline({
    scrollTrigger: {
        trigger: ".banner-txt-wrap > h2",
        trigger: ".banner-txt-wrap > h1",
        trigger: ".banner-txt-wrap > h1 span",
        trigger: ".banner-txt-wrap > h2:last-child",
        trigger: ".banner-list li",
        trigger: ".form-wrap > h2",
        trigger: ".form-inner-wrap .cta-form-btn",
        trigger: ".banner-lp",
        toggleActions: "play none restart pause",
        start: "50% 100%",
        end: "4px 30%"
    }
});

banner.from(".banner-txt-wrap > h2",{
    x: 400,
    duration: 1
});
banner.from(".banner-txt-wrap > h1",{
    x: -1200,
    duration: 1
});

banner.from(".banner-txt-wrap > h1 span",{
    opacity: 0,
    stagger: .3,
    duration: .1
},"<");

banner.from(".banner-list li",{
    y: 500,
    duration: 1,
    opacity: 0,
    stagger: .5
});

banner.from(".form-wrap > h2",{
    y: 250,
    duration: 1,
    opacity: 0
});

banner.from(".form-inner-wrap .cta-form-btn",{
    xPercent: -400,
    duration:.5,
    ease: "power3.inOut",
    scale: 0
});
banner.from(".banner-lp",{
    y: 200,
    duration: 1.5,
    opacity: 0
});

  


