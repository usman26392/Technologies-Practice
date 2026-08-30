


function navigationAccordion() {
  if (window.innerWidth < 1200) {
    let dropdown = document.querySelectorAll(".side-panel-dropdown");

    dropdown.forEach(function (dp) {
      let dropdownItem = dp.closest(".side-nav-item");
      dropdownItem.classList.add("dropdown-active");
    });

    let accordionNav = document.querySelectorAll(".side-nav-item.dropdown-active");

    let iterator;


    for (iterator = 0; iterator < accordionNav.length; iterator++) {
      console.log(accordionNav[iterator].querySelector(".menu__menuitem__icon"))
      accordionNav[iterator].querySelector(".menu__menuitem__icon").addEventListener("click", function (e) {
          e.stopPropagation();
          let currentItem = e.target;

          // console.log(currentItem)

          let panel = this.nextElementSibling;
          if (currentItem.classList.contains("open")) {
            currentItem.classList.remove("open");
            panel.style.maxHeight = "0px";
          } else {
            let mainItem = currentItem.closest(".main-side-panel").querySelectorAll(".menu__menuitem__icon");
            mainItem.forEach(function (itm) {
              itm.classList.remove("open");
              itm.nextElementSibling.style.maxHeight = "0px";
            });
            currentItem.classList.add("open");
            panel.style.maxHeight = panel.scrollHeight + "px";
          }


        });
    }
  }
}

export default navigationAccordion;
