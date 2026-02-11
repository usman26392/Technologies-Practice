function navigationSlide() {
  const burger = document.querySelector("#toggle");
  const navMenu = document.querySelector(".nav-menu");
  const htmlEl = document.documentElement;

  if (burger && navMenu) {
    burger.addEventListener("click", function () {
      const expanded = this.getAttribute("aria-expanded") === "true";
      this.setAttribute("aria-expanded", !expanded);
      this.classList.toggle("active");
      navMenu.classList.toggle("open");
      htmlEl.classList.toggle("overflow-hidden");
    });
    // Optional: Close menu when clicking outside or on a nav link (mobile UX)
    navMenu.querySelectorAll(".nav-link").forEach(link => {
      link.addEventListener("click", () => {
        if (navMenu.classList.contains("open")) {
          navMenu.classList.remove("open");
          burger.classList.remove("active");
          burger.setAttribute("aria-expanded", false);
          htmlEl.classList.remove("overflow-hidden");
        }
      });
    });
  }
}

export default navigationSlide;
