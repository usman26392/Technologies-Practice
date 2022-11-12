
// this is entry point.
// import {counter, num1} from "./counter"
// import multiple from "./multiple"

import PrintName from "./functions";
import button from "./components/Button.js";

PrintName();
button();


var sw = $(window).width();
var sh = $(window).height();

  // Font Resizer-------------------Start
  function fontResizer() {
    var perc = parseInt(sw) / 120;
    $("body").css("font-size", perc);
  }



  $(window).on("load", function () {
    if (sw > 1199) {
      fontResizer();
  }

  setTimeout(function () {
    $(".animate").bind("inview", function (event, isInView) {
      if (isInView) {
        var animate = $(this).attr("data-animation");
        var speedDuration = $(this).attr("data-duration");
        var $t = $(this);
        setTimeout(function () {
          $t.removeClass("animate");
          $t.addClass(animate + " animate__animated");
        }, speedDuration);
      }
    });
  }, 510);

  setTimeout(function () {
    /* ---------------- Image Desktop Mob Conversion -------------------- */
    // imagePath();
  }, 1000);

  //loader init
  setTimeout(function () {
    $(".lds-wrapper").fadeOut("slow");
    $("html").removeClass("loadjs");
  }, 100);

  if ($(document).find("img").hasClass("svg-convert")) {
    $(".svg-convert").svgConvert({
      onComplete: function () {},
    });
  }

  // $(".body-overlay").on("click", function() {
  //     $(".thankyou-popup").fadeOut("slow");
  //     $(this).fadeOut("slow");
  // });

  // $(".open-popup").on("click", function() {
  //     $(".thankyou-popup").fadeIn("slow");
  //     $(".body-overlay").fadeIn("slow");

  // });

  });

  $(document).ready(function () {
    /* Navigation Active */
    $("#toggle").click(function () {
      $(this).toggleClass("active");
      $(".navigation").toggleClass("open");
      $("body").toggleClass("disabled-scroll");
    });
    /* Navigation Active */

    $('.mobile-icon').on('click', function(e) {
      e.stopPropagation();
      let currentEl = $(this);
      currentEl.toggleClass('rotate');
      currentEl.siblings('.menu__menuitem__dropdown').slideToggle('slow');
    });

    //Home Hero Slider--------------
    if ($(document).find("div").hasClass("news__slider")) {
      var news_slider = new Swiper(".news__slider .swiper", {
        slidesPerView: 1,
        spaceBetween: 30,
        loop: false,
        speed: 2000,
        // autoplay: {
        //     delay: 2500,
        //     disableOnInteraction: false,
        // },
        pagination: {
          el: ".news__slider .swiper-pagination",
          clickable: true,
        },
        navigation: {
          nextEl: ".news__slider .swiper-button-next",
          prevEl: ".news__slider .swiper-button-prev",
        },
        breakpoints: {
          576: {
            slidesPerView: 2,
          },
          768: {
            slidesPerView: 2,
          },
          1200: {
            slidesPerView: 3,
          },
        },
      });
    }

    // facilities
    if ($(document).find("section").hasClass("facilities")) {
      var facilities_slider = new Swiper(".facilities .swiper", {
        slidesPerView: 1,
        spaceBetween: 0,
        loop: false,
        speed: 2000,
        autoplay: {
            delay: 2500,
            disableOnInteraction: false,
        },
        pagination: {
          el: ".facilities .swiper-pagination",
          clickable: true,
        },
        
        breakpoints: {
          576: {
            slidesPerView: 2,
          },
          768: {
            slidesPerView: 3,
          },
          1200: {
            slidesPerView: 4,
          },
        },
      });
    }

    // News Listing
    if ($(document).find("div").hasClass("listing-slider")) {
      var facilities_slider = new Swiper(".listing-slider .swiper", {
        slidesPerView: 1,
        spaceBetween: 30,
        loop: false,
        speed: 1000,
        autoplay: {
          delay: 2500,
          disableOnInteraction: false,
        },
        breakpoints: {
          576: {
            slidesPerView: 2,
          },
          768: {
            slidesPerView: 3,
          },
          1200: {
            slidesPerView: 5,
            spaceBetween: 30,
          },
        },
      });
    }

    // $(".single-select").select2({
    //   minimumResultsForSearch: -1,
    //   dropdownCssClass: "custom-dropdown",
    //   width: "100%",
    // });

    // function scrollFix(scrollbar) {
    //   const draggerRail = $(scrollbar).find(".mCSB_draggerRail");
    //   const draggerContainer = $(scrollbar).find(".mCSB_draggerContainer");
    //   if (
    //     draggerRail.length > 0 &&
    //     draggerRail.parent().hasClass("mCSB_dragger")
    //   ) {
    //     draggerContainer.append(draggerRail);
    //   }
    // }

    // $(".malihu-scroll").mCustomScrollbar({
    //   theme: "dark-3",
    //   // scrollbarPosition: "outside",
    //   callbacks: {
    //     onInit: () => scrollFix(this),
    //   },
    // });

    // tabs active
      //   var path = window.location.pathname.split("/").pop();
    // var target = $('.newsroom-tabs__row > a[href="/' + path + '"]');
    // target.addClass('tab-active');

    var path = window.location.pathname;

    var target2 = $('.menu__menuitem--menulink[href="' + path + '"]');
    target2.addClass("active");

    let nestedPath = window.location.pathname.split('/')
    if(nestedPath[2]) {
      $("a[href='/business-sectors/']").addClass('active')
    }

    if(path == "/contact-us/") {
        $("body").addClass("contact-us-body")
    }

    if(path == "/news/") {
        $("body").addClass("contact-us-body")
    } 




    // logout dropdown
    $(".nav-login__user").on("click", function () {
      $(this)
        .find(".nav-login__user__dropdown")
        .toggleClass("nav-login__user__dropdown--logout__open");
      $(".nav-login__bell__dropdown").removeClass(
        "nav-login__bell__dropdown--notify-open"
      );
    });

    // message notify dropdown open
    $(".nav-login__bell").on("click", function () {
      $(this)
        .find(".nav-login__bell__dropdown")
        .toggleClass("nav-login__bell__dropdown--notify-open");
      $(".nav-login__user__dropdown").removeClass(
        "nav-login__user__dropdown--logout__open"
      );
    });

    $(".toggle-btn > p").on("click", function () {
      if (sw < 992) {
        var tag = $(this).parent().find("ul");
        if ($(this).hasClass("opened")) {
          $(this).removeClass("opened");
          $(".toggle-btn > .qlinks-menu").slideUp();
        } else {
          $(".toggle-btn > p").removeClass("opened");
          $(".toggle-btn > .qlinks-menu").slideUp();
          $(this).addClass("opened");
          tag.slideDown();
        }
      }
    });

    // search bar
    $(".header--right__cta__search").on("click", function (e) {
      e.stopPropagation();
      $(this).siblings(".search-bar").toggleClass("search-bar--open");
      if ($(this).find(".search-icon-1").hasClass("icon-show")) {
        $(".search-icon-1").removeClass("icon-show");
        $(".search-icon-2").addClass("icon-show");
      } else {
        $(".search-icon-1").addClass("icon-show");
        $(".search-icon-2").removeClass("icon-show");
      }
    });

    $(".qlinks-menu__acc__title").on("click", function (e) {
      e.stopPropagation();
      if ($(this).siblings(".qlinks-menu__accordion").hasClass("hide")) {
        $(".qlinks-menu__acc__title")
          .siblings(".qlinks-menu__accordion")
          .stop()
          .slideUp("slow")
          .addClass("hide");
        $(this)
          .siblings(".qlinks-menu__accordion")
          .stop()
          .slideDown("slow")
          .removeClass("hide");
      } else {
        $(this)
          .siblings(".qlinks-menu__accordion")
          .stop()
          .slideUp("slow")
          .addClass("hide");
      }
    });
  });

  if ($(document).find("ul").hasClass("countAnimate")) {
    var scroll_a = 0;
    $(window).scroll(function () {
      var oTop = $("#counter").offset().top - window.innerHeight;
      if (scroll_a == 0 && $(window).scrollTop() > oTop) {
        $(".count-num").each(function () {
          var $this = $(this),
            countTo = $this.attr("data-count");
          $({
            countNum: $this.text(),
          }).animate(
            {
              countNum: countTo,
            },
            {
              duration: 1500,
              easing: "swing",
              step: function () {
                $this.text(Math.floor(this.countNum));
              },
              complete: function () {
                $this.text(this.countNum);
                //alert('finished');
              },
            }
          );
        });

        // a = 1;
      }
    });
  }

  // Landscape Mode off----------------Start
  $(window).on("resize orientation", function () {
    sw = $(window).width();
    sh = $(window).height();
    if (sh < 450) {
      $("#portrait-warnning").css("display", "flex");
    } else {
      $("#portrait-warnning").css("display", "none");
    }

    setTimeout(function () {
      if (sw > 1199) {
        if (sw < 1400 && sw > 1300 && sh > 900) {
        } else {
          fontResizer();
        }
      }
    }, 1000);
  });
  // Landscape Mode off----------------End

  // Sticky Header----------------Start
  // $(window).scroll(function () {
  //   var header1 = $(".header");
  //   var sticky1 = 0;
  //   if (sw < 767) {
  //     if (window.pageYOffset > sticky1) {
  //       header1.addClass("sticky");
  //       console.log("added");
  //     } else {
  //       header1.removeClass("sticky");
  //     }
  //   }
  // });



  // hero accordion
  $(function () {
    $(".hero-home__locations__popup__card__title").on("click", function (j) {
      var dropDown = $(this)
        .closest(".hero-home__locations__popup__card")
        .find(".hero-home__locations__popup__card__panel");
      $(this)
        .closest(".hero-home__locations__popup__scroll")
        .find(".hero-home__locations__popup__card__panel")
        .not(dropDown)
        .slideUp();

      if ($(this).hasClass("active")) {
        $(this).removeClass("active");
      } else {
        $(this)
          .closest(".hero-home__locations__popup__scroll")
          .find(".hero-home__locations__popup__card__title.active")
          .removeClass("active");
        $(this).addClass("active");
      }

      dropDown.stop(false, true).slideToggle();
      j.preventDefault();
    });
  });


  // hero map popup

  $(function () {
    $(".hero-home__locations__pin").on("click", function (e) {
      e.stopPropagation();
      $(".hero-home__locations__popup").addClass("hide");
      $(this).siblings(".hide").removeClass("hide");
      $(".hero-home__locations__pin").removeClass("active");
      $(this).addClass("active");
      $(".hero-home__locations__map").removeClass("width-imp");
      $(this).parents(".hero-home__locations__map").addClass("width-imp");
    });

    $(".icon").on("click", function (e) {
      e.stopPropagation();
      $(this).parents(".hero-home__locations__popup").addClass("hide");
      $(this)
        .parents(".hero-home__locations__map")
        .find(".hero-home__locations__pin")
        .removeClass("active");
      $(this).parents(".hero-home__locations__map").removeClass("width-imp");
    });
  });

  // Fancybox.bind("[data-fancybox]", {
  //   dragToClose: false,
  // });

  



  //Image Observer Start
  let imageObserver1 = [...document.querySelectorAll(".img__observer__one")];
  let imageObserver2 = [...document.querySelectorAll(".img__observer__two")];

  let options = {
    rootMargin: "0px",
    threshold: 0.2,
  };

  let setItemActive = (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("active");
      }
    });
  };

  let observer = new IntersectionObserver(setItemActive, options);

  imageObserver1.forEach((item1, idx) => {
    observer.observe(item1);
  });

  imageObserver2.forEach((item2, idx) => {
    observer.observe(item2);
  });



  // intersection observer for src append attribute on viewport

const imgElements = document.querySelectorAll("img[data-src]");

const lazyLoadingImage = (entries, observer2) => {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) return;
    entry.target.src = entry.target.dataset.src;
    entry.target.addEventListener("load", () => {
      entry.target.classList.remove("lazy-img");
      observer2.unobserve(entry.target);
    });
  });
};
const lazyLoadingObserver = new IntersectionObserver(lazyLoadingImage, {
  threshold: 0,
  rootMargin: "0px 0px 150px 0px",
});
imgElements.forEach((img) => lazyLoadingObserver.observe(img));

console.log("Hello javascript");





