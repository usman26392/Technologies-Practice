export default function recordSlider() {
  if (document.querySelector(".about-us__slider-wrapper")) {
    let recordSlider = new Swiper(".about-us__slider-wrapper .swiper", {
      loop: true,
      speed: 1000,
      // autoplay: {
      //   delay: 3000,
      // },
      slidesPerView: 1,
      observeParents: true,
      observer: true,
      spaceBetween: 0,
      effect: "fade",
      fadeEffect: {
        crossFade: true,
      },
      breakpoints: {
        1200: {
          slidesPerView: 1,
        },
      },
      navigation: {
        nextEl: ".about-us__slider-wrapper .swiper-button-next",
        prevEl: ".about-us__slider-wrapper .swiper-button-prev",
      },
      pagination: {
        el: ".custom-sliderfractions",
        type: "custom",
        renderCustom: function (swiper, current, total) {
          return `<div class="custom-sliderfractions__inner"><span>0${current}/</span> <span>0${total}</span></div>`;
        },
      },
    });
  }
}
