



export default function testimonialsSlider() {
  if (document.querySelector(".testimonial-main-slider-wrapper")) {
    new Swiper(".testimonial-main-slider-wrapper > .swiper", {
      spaceBetween: 0,
      slidesPerView: 1,
      speed: 1500,
      effect: "fade",
      fadeEffect: {
        crossFade: true,
      },
      pagination: {
        el: ".testimonial-main-slider-wrapper .swiper-pagination",
        type: "progressbar",
      },
      navigation: {
        nextEl: ".testimonial-main-slider-wrapper .swiper-button-next",
        prevEl: ".testimonial-main-slider-wrapper .swiper-button-prev",
      },
    });
  }


}
