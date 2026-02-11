export default function observatorySlider() {
  if (document.querySelector(".observatory-counter-slider-wrapper")) {
    // thumb slider (main controller)
    var swiperThumb = new Swiper(".observatory-counter-slider-wrapper > .swiper", {
      spaceBetween: 3,
      watchSlidesProgress: true,
      slidesPerView: 3,
      freeMode: true,
    });

    // text slider
    var swiperText = new Swiper(".observatory-text-slider > .swiper", {
      spaceBetween: 0,
      slidesPerView: 1,
      speed: 1500,
      effect: "fade",
      fadeEffect: {
        crossFade: true,
      },
    });

    // big image slider
    var swiperBigSliderImg = new Swiper(".observatory-big-main-slider-wrapper > .swiper", {
      spaceBetween: 20,
      slidesPerView: 1,
      speed: 1500,
      direction: "vertical",
      thumbs: {
        swiper: swiperThumb,
      },
      navigation: {
        nextEl: ".observatory-big-main-slider-wrapper .swiper-button-next",
        prevEl: ".observatory-big-main-slider-wrapper .swiper-button-prev",
      },
    });

    // Add event listeners for all sliders to ensure complete synchronization
    swiperThumb.on('slideChange', function() {
      swiperText.slideTo(swiperThumb.activeIndex);
      swiperBigSliderImg.slideTo(swiperThumb.activeIndex);
    });

    // Enable navigation from the text slider as well
    swiperText.on('slideChange', function() {
      swiperThumb.slideTo(swiperText.activeIndex);
      swiperBigSliderImg.slideTo(swiperText.activeIndex);
    });

    // Enable navigation from the big image slider as well
    swiperBigSliderImg.on('slideChange', function() {
      swiperThumb.slideTo(swiperBigSliderImg.activeIndex);
      swiperText.slideTo(swiperBigSliderImg.activeIndex);
    });
  }
}
