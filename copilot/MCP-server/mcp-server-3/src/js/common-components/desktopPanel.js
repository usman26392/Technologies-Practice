export default function desktopPanel() {
  if (document.querySelector(".burger-menu")) {
    let burger__menu = document.querySelector(".burger-menu");
    let main__side__panel = document.querySelector(".main-side-panel");
    let main__cross = document.querySelector(".main-side-panel__cross-icon");
    let rootEl = document.documentElement;
    // console.log(rootEl);

    let planet_1 = document.querySelector(".main-side-panel__planets-wrapper .planet-1");
    let planet_2 = document.querySelector(".main-side-panel__planets-wrapper .planet-2");
    let planet_3 = document.querySelector(".main-side-panel__planets-wrapper .planet-3");
    let planet_4 = document.querySelector(".main-side-panel__planets-wrapper .planet-4");

    function planetsAnimate() {
      planet_1.classList.add("active");
      planet_2.classList.add("active");
      planet_3.classList.add("active");
      planet_4.classList.add("active");
    }

    burger__menu.addEventListener("click", function () {
      main__side__panel.classList.add("active");
      rootEl.classList.add("overflow-hidden");
      planetsAnimate()
    });

    main__cross.addEventListener("click", function () {
      main__side__panel.classList.remove("active");
      rootEl.classList.remove("overflow-hidden");
      planet_1.classList.remove("active");
      planet_2.classList.remove("active");
      planet_3.classList.remove("active");
      planet_4.classList.remove("active");
    });

    let side_nav_items = document.getElementsByClassName("side-nav-item");
    for (const side_nav_item of side_nav_items) {
      if (side_nav_item.querySelector(".side-panel-dropdown")) {
        side_nav_item.classList.add("side-nav-item-has-dropdown");
      }
    }

    if (window.innerWidth > 1199) {
      for (const side_nav_item of side_nav_items) {
        side_nav_item.addEventListener("mouseover", function () {
          let current_nav_item = this;
          let current__nav_dropdown = current_nav_item.lastElementChild;

          if (current__nav_dropdown.matches("ul")) {
            for (const side_nav_item of side_nav_items) {
              if (side_nav_item.lastElementChild.matches("ul")) {
                side_nav_item.lastElementChild.classList.remove("active");
              }
            }
            current__nav_dropdown.classList.add("active");
          }

          if (!current_nav_item.querySelector(".side-panel-dropdown")) {
            for (const side_nav_item of side_nav_items) {
              if (side_nav_item.querySelector(".side-panel-dropdown") !== null) {
                if (side_nav_item.querySelector(".side-panel-dropdown").classList.contains("active")) {
                  side_nav_item.querySelector(".side-panel-dropdown").classList.remove("active");
                }
              }
            }
          }
        });
      }

      let side_panel_dropdowns = document.querySelectorAll(".side-panel-dropdown");

      for (const side_panel_dropdown of side_panel_dropdowns) {
        side_panel_dropdown.addEventListener("mouseout", function () {
          console.log(this.classList.remove("active"));
        });
      }
    }
  }
}
