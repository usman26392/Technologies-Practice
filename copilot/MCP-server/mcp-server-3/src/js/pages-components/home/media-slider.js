export default function mediaSlider() {
  if (document.querySelector(".social-media__slider-wrapper")) {
    let media_Slider = new Swiper(".social-media__slider-wrapper .swiper", {
      speed: 1500,
      loop: false,
      spaceBetween: 30,
      slidesPerView: 2,
      observeParents: true,
      observer: true,
      breakpoints: {
        768: {
          slidesPerView: 3,
        },
        992: {
          slidesPerView: 3,
        },
        1200: {
          slidesPerView: 5,
        },

      },
      // effect: "fade",
      // fadeEffect: {
      //   crossFade: true,
      // },
      // pagination: {
      //   el: ".social-media__slider-wrapper .swiper-pagination",
      //   clickable: true,
      // },
    });
  }
}
