
export default function homeHeroSlider() {

  document.addEventListener("DOMContentLoaded", () => {
    window.setTimeout(() => {
      const imgElements = document.querySelectorAll("img[data-src-hero]");

      const lazyLoadingImage = (entries, observer2) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          entry.target.src = entry.target.dataset.srcHero;

          entry.target.addEventListener("load", () => {
            entry.target.classList.remove("lazy-img");
            observer2.unobserve(entry.target);
          });

        });
      };
      const lazyLoadingObserver = new IntersectionObserver(lazyLoadingImage, {
        threshold: 0,
        rootMargin: "0px 0px 200px 0px",
      });

      imgElements.forEach((img) => lazyLoadingObserver.observe(img));
    }, 100);
  });

  if (document.querySelector(".home-hero__slider")) {
    

    let homeImage = new Swiper(".home-hero__slider", {
      slidesPerView: 1,
      loop: false,
      speed: 2000,
      init: false,
      // autoplay: {
      //   delay: 2500,
      //   disableOnInteraction: false,
      // },
      allowTouchMove: false,
      observeParents: true,
      observer: true,
      effect: "fade",
      fadeEffect: {
        crossFade: true,
      },
      pagination: {
        el: '.home-hero > .swiper-pagination',
        clickable: true
      },

      
    });


    window.setTimeout(function() {
      homeImage.init();
    }, 200);



    
  }

  if(document.querySelector(".home-hero__card-slider")) {
    new Swiper(".home-hero__card-slider .swiper", {
      slidesPerView: 1,
      loop: false,
      speed: 1500,
      spaceBetween: 20,
      // autoplay: {
      //   delay: 2500,
      //   disableOnInteraction: false,
      // },
      allowTouchMove: true,
      observeParents: true,
      observer: true,
      navigation: {
        nextEl: '.home-hero__card-slider .swiper-button-next',
        prevEl: '.home-hero__card-slider .swiper-button-prev',
      },
      
      

      
    });
  }


}



  