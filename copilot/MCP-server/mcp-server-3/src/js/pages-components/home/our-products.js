export default function ourProducts() {
    // Create main horizontal slider
    const mainSlider = new Swiper(".our-products-main-slider-wrapper .swiper", {
        speed: 1500,
        loop: false,
        slidesPerView: 1.5,
        centeredSlides: true,
        observeParents: true,
        observer: true,
        spaceBetween: 24,
        watchSlidesProgress: true,
        effect: "coverflow",
        coverflowEffect: {
            rotate: 0,
            stretch: 0,
            depth: 40,
            modifier: 1,
            slideShadows: false,
            scale: 0.78,
        },
        breakpoints: {
            576: {
                slidesPerView: 2.5,
            },
            1200: {
                slidesPerView: 1.9,
            },
        },
    });

    // Create vertical slider
    const verticalSlider = new Swiper(".our-product-verticle-main-slider-wrapper > .swiper", {
        spaceBetween: 0,
        slidesPerView: 1,
        speed: 1500,
        observeParents: true,
        observer: true,
        direction: "vertical",
        navigation: {
            nextEl: ".our-product-verticle-main-slider-wrapper .swiper-button-next",
            prevEl: ".our-product-verticle-main-slider-wrapper .swiper-button-prev",
        },
    });

    // Sync the sliders using controller
    mainSlider.controller.control = verticalSlider;
    verticalSlider.controller.control = mainSlider;
}
