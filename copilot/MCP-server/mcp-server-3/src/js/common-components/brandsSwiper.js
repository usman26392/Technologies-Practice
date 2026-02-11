// Brands Swiper initialization for marquee effect
// Uses Swiper.js (CDN already included in project)
// Place this file in js/common-components/brandsSwiper.js

export default function brandsSwiperInit() {
  new Swiper(".brands-swiper", {
    slidesPerView: 6,
    spaceBetween: 10, // px, matches Figma gap
    loop: true,
    speed: 4000, // slow for marquee effect
    autoplay: {
      delay: 0,
      disableOnInteraction: false,
      reverseDirection: false,
      pauseOnMouseEnter: true,
    },
    freeMode: true,
    freeModeMomentum: false,
    grabCursor: false,
    allowTouchMove: true,
    breakpoints: {
      768: {
        slidesPerView: 5,
        spaceBetween: 30,
      },
      1200: {
        slidesPerView: 6,
        spaceBetween: 90,
      },
    },
  });
}
