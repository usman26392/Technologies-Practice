function lazyLoadImgObserver() {
  document.addEventListener("DOMContentLoaded", () => {
    const imgElements = document.querySelectorAll("img[data-src]");

    const lazyLoadingImage = (entries, observer2) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.src = entry.target.dataset.src;
        entry.target.addEventListener("load", () => {
          entry.target.classList.remove("lazy-img");
          observer2.unobserve(entry.target);
        });
      });
    };
    const lazyLoadingObserver = new IntersectionObserver(lazyLoadingImage, {
      threshold: 0,
      rootMargin: "0px 0px 150px 0px",
    });
    imgElements.forEach((img) => lazyLoadingObserver.observe(img));
  });
}

export default lazyLoadImgObserver;
