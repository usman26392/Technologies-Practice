


export default function BrandSlider() {
  if (document.querySelector(".brand__slider-wrapper")) {
    let brand_Slider = new Swiper(".brand__slider-wrapper .swiper", {
      speed: 1500,
      loop: false,
      spaceBetween: 20,
      slidesPerView: 1.5,
      observeParents: true,
      observer: true,
      centeredSlides: false,
      autoplay: {
        delay: 2500,
        disableOnInteraction: false,
      },
      pagination: {
        el: ".brand__slider-wrapper .swiper-pagination",
        clickable: true,
      },
      breakpoints: { 
        768: { 
          slidesPerView: 3.8,
          centeredSlides: false,
        },
        992: { 
          slidesPerView: 5.8,
          spaceBetween: 30,
          centeredSlides: false,
        }
      }
      
    });
  }
}
