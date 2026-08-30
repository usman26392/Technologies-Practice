export default function reportPodCastSlider() {
  if (document.querySelector(".report-podcast__slider-wrapper")) {
    let report_podcast__slider_wrappers = document.querySelectorAll(".report-podcast__slider-wrapper");

    report_podcast__slider_wrappers.forEach(function (report_podcast__slider_wrapper) {
      let panel_swiper = report_podcast__slider_wrapper.querySelector(".swiper"),
        panel_swiper_pagination = report_podcast__slider_wrapper.querySelector(".swiper-pagination");

      new Swiper(panel_swiper, {
        speed: 1500,
        loop: false,
        spaceBetween: 20,
        slidesPerView: 1,
        observeParents: true,
        observer: true,
        pagination: {
          el: panel_swiper_pagination,
          clickable: true,
        },
        breakpoints: { 
          768: {
            slidesPerView: 1.3,
          },
          1200: {
            slidesPerView: 3.3,
          }
         }
      });
    });

    if(window.innerWidth > 768) {
      let report__podcast__panels = document.querySelectorAll(".report-podcast__panel");
  
      report__podcast__panels.forEach((report__podcast__panel) => {
        report__podcast__panel.addEventListener("click", function (e) {
          report__podcast__panels.forEach((report__podcast__panel) => {
            report__podcast__panel.classList.remove("active");
          });
          this.classList.add("active");
        });
      });
      

    }
    


  }
}
