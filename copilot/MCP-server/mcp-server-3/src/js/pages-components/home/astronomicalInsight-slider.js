let astroSwiper = null;

function initAstroSwiper() {
  if (astroSwiper) {
    astroSwiper.destroy(true, true);
  }
  astroSwiper = new Swiper(".astromical-insight-content .swiper", {
    speed: 1500,
    loop: true,
    slidesPerView: 1.5,
    centeredSlides: true,
    observeParents: true,
    observer: true,
    spaceBetween: 24, // Adjusted for consistent space
    watchSlidesProgress: true,
    effect: "coverflow",
    coverflowEffect: {
      rotate: 0,
      stretch: 0,
      depth: 40,      // Lower depth for less overlap
      modifier: 1,    // Standard modifier for even effect
      slideShadows: false,
      scale: 0.98,    // Slight scale for creative but not crowded look
    },
    // add breakpoints for responsive design
    breakpoints: {
      576: {
        slidesPerView: 2.5, 
      },
      1200: {
        slidesPerView: 3.5,
      }
    },
    navigation: {
      nextEl: '.astromical-insight-content .swiper-button-next',
      prevEl: '.astromical-insight-content .swiper-button-prev',
    },
  });
}

function filterAstroSlides(tab) {
  // Instead of removing slides, just hide/show them with CSS
  const slides = document.querySelectorAll('.astromical-insight-content .swiper-slide');
  
  slides.forEach(slide => {
    if (slide.classList.contains(tab)) {
      slide.style.display = ''; // Show slides of active category
    } else {
      slide.style.display = 'none'; // Hide slides of inactive category
    }
  });
}

export default function astronomicalInsightSlider() {
  const tabButtons = document.querySelectorAll('.astromical-tabs [data-tab]');
  let activeTab = 'astrography';

  // Hide blog slides initially
  const blogSlides = document.querySelectorAll('.astromical-insight-content .swiper-slide.blogs');
  blogSlides.forEach(slide => {
    slide.style.display = 'none';
  });

  function activateTab(tab) {
    activeTab = tab;
    tabButtons.forEach(btn => btn.classList.toggle('active', btn.getAttribute('data-tab') === tab));
    // Toggle 'active' class on .astronomical-insights-sec based on tab
    const section = document.querySelector('.astronomical-insights-sec');
    if (section) {
      if (tab === 'blogs') {
        section.classList.add('active');
      } else {
        section.classList.remove('active');
      }
    }
    
    // Filter slides by toggling display property
    filterAstroSlides(tab);
    
    // Reinitialize swiper to update the view with visible slides
    setTimeout(() => {
      initAstroSwiper();
    }, 50);
  }

  if (tabButtons.length) {
    tabButtons.forEach(btn => {
      btn.addEventListener('click', function () {
        const tab = this.getAttribute('data-tab');
        activateTab(tab);
      });
    });
    
    // Initialize the first tab
    initAstroSwiper();
  } else {
    initAstroSwiper();
  }
}
