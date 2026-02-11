

function clipPathImgObserver() {
  if (window.innerWidth > 767) {
    let imageObserver = [...document.querySelectorAll(".img__observer")];
    let option = {
      rootMargin: "-200px",
      threshold: 0.2,
    };

    let setItemActive = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("active");
        }
      });
    };

    let observer2 = new IntersectionObserver(setItemActive, option);

    imageObserver.forEach((item1, idx) => {
      observer2.observe(item1);
    });
  }
}

export default clipPathImgObserver;
