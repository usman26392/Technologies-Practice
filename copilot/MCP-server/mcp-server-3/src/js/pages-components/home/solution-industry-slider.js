


export default function solutionIndustrySlider() {
  if (document.querySelector(".solution-indus__slider-wrapper")) {
    let solutionSlider = new Swiper(".solution-indus__slider-wrapper .swiper", {
      speed: 1500,
      loop: false,
      spaceBetween: 20,
      slidesPerView: 1,
      observeParents: true,
      observer: true,
      init: false,
      pagination: {
        el: ".solution-indus__slider-wrapper .swiper-pagination",
        type: "progressbar",
      },
      navigation: {
        nextEl: '.solution-indus__slider-wrapper .swiper-button-next',
        prevEl: '.solution-indus__slider-wrapper .swiper-button-prev',
      },
      breakpoints: {
        992: {
          spaceBetween: 50,
          slidesPerView: 2.21,

         }
       }
    });

    const tabs = document.querySelectorAll('.solution-indus__tabs li');


    tabs.forEach(tab => { 

      if(tab.classList.contains("active")) {
        const category = tab.getAttribute('data-category');

        document.querySelectorAll('.solution-indus__slider-wrapper .swiper-slide').forEach(slide => {
          if (slide.classList.contains(category)) {
            slide.style.display = 'block'; // Show matching slides
          } else {
            slide.style.display = 'none'; // Hide non-matching slides
          }
        }); 

      }

      // Initialize Swiper
      solutionSlider.init();

     });


   
    tabs.forEach(tab => {
      tab.addEventListener('click', () => {
        // Remove the 'active' class from all tabs
        tabs.forEach(t => t.classList.remove('active'));   
        // Add the 'active' class to the clicked tab
        tab.classList.add('active');
    
        // Get the category from the data-category attribute
        const category = tab.getAttribute('data-category');

        document.querySelectorAll('.solution-indus__slider-wrapper .swiper-slide').forEach(slide => {
          if (slide.classList.contains(category)) {
            slide.style.display = 'block'; // Show matching slides
          } else {
            slide.style.display = 'none'; // Hide non-matching slides
          }
        });
    
        // Update Swiper after showing/hiding slides
        solutionSlider.update();  
      });
    });

    
    // Initialize Swiper
    solutionSlider.init();


  }
}
