

export default function projectSlider() {
  if (document.querySelector(".our-projects__grand-parent-slider-wrapper")) {
    new Swiper(".our-projects__grand-parent-slider-wrapper > .swiper", {
      speed: 2000,
      loop: false,
      spaceBetween: 50,
      slidesPerView: 1,
      observeParents: true,
      observer: true,
      pagination: {
        el: ".our-projects__grand-parent-slider-wrapper .nav-progress-and-btn .swiper-pagination",
        type: "progressbar",
      },
      navigation: {
        nextEl: '.our-projects__grand-parent-slider-wrapper .nav-progress-and-btn  .swiper-button-next',
        prevEl: '.our-projects__grand-parent-slider-wrapper .nav-progress-and-btn  .swiper-button-prev',
      },

    });
  }

  if (document.querySelector(".our-projects__thumbs-slider")) {
    const thumbSliders = document.querySelectorAll(".our-projects__thumbs-slider .swiper");

    thumbSliders.forEach((thumbSlider) => {
      const thumbsSwiper = new Swiper(thumbSlider, {
        loop: false,
        spaceBetween: 15,
        slidesPerView: 4,
        watchSlidesProgress: true,
        observeParents: true,
        observer: true,
        breakpoints: { 
          768: { 
            slidesPerView: 5,
          }
        }
      });

      const figureSliders = document.querySelectorAll(".our-projects__figure-slider .swiper");
      figureSliders.forEach((figureSlider) => {
        new Swiper(figureSlider, {
          speed: 1500,
          loop: true,
          spaceBetween: 0,
          slidesPerView: 1,
          observeParents: true,
          observer: true,
          effect: "fade",
          fadeEffect: {
            crossFade: true,
          },
          thumbs: {
            swiper: thumbsSwiper,
          },
        });
      });
    });
  }
}
