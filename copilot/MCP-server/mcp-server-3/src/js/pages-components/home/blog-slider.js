


export default function blogSlider() {
  if (document.querySelector(".blog_slider-wrapper")) {
    let blog_Slider = new Swiper(".blog_slider-wrapper .swiper", {
      speed: 1500,
      loop: false,
      spaceBetween: 20,
      slidesPerView: 1,
      observeParents: true,
      observer: true,
      pagination: {
        el: ".blog_slider-wrapper .swiper-pagination",
        type: "progressbar",
      },
      navigation: {
        nextEl: '.blog_slider-wrapper .swiper-button-next',
        prevEl: '.blog_slider-wrapper .swiper-button-prev',
      },
      breakpoints: { 
        
        992: { 
          slidesPerView: 2.5,
          spaceBetween: 30,
        },
        1200: {
          slidesPerView: 3.5,
          spaceBetween: 50,
        },

      }
      
      
    });
  }
}
