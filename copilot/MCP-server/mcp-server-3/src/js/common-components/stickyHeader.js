


function stickyHeader() {
  if (document.querySelector(".header")) {
    let header = document.querySelector("header");
    let sticky = 0;

    function stickyHeader() {
      if (window.scrollY > sticky) {
        header.classList.add("sticky");
      } else {
        header.classList.remove("sticky");
      }
    }

    window.addEventListener("scroll", (event) => {
      stickyHeader();
    });
  }
}

export default stickyHeader;
