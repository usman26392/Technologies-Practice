

export default function searchToggle() {

  if(document.querySelector(".search-btn")) {
    let search__btn = document.querySelector(".search-btn");
    let header__search = document.querySelector(".header__search form");
    let cross__icon = header__search.querySelector(".cross-icon");
  
    search__btn.addEventListener("click", function () {
      header__search.classList.add("active");
    });
  
    cross__icon.addEventListener("click", function () {
      header__search.classList.remove("active");
    });
  }

}
