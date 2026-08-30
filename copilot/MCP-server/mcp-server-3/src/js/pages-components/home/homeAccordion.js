



export default function homeAccordion() {
  if (document.querySelector(".c-accordion")) {
    let c__accordion = document.querySelector(".c-accordion"),
      c__buttons = c__accordion.getElementsByClassName("c-accordion__button"),
      c__collapses = c__accordion.getElementsByClassName("c-accordion__collapse");

    c__buttons[0].classList.add("active");
    c__collapses[0].classList.add("show");
    c__collapses[0].style.maxHeight = c__collapses[0].scrollHeight + "px";

    // console.log( (c__buttons[0].dataset.id) != undefined );

    if((c__buttons[0].dataset.id) != undefined) {
      document.querySelector(`#${c__buttons[0].dataset.id}`).classList.add("active");
    }


    

    c__accordion.addEventListener("click", function (e) {
      let currentElement = e.target;
      // console.log(e);
      // console.log(this);

      // for accordion buttons
      if (currentElement.matches(".c-accordion__button.active")) {
        for (const c_button of c__buttons) {
          c_button.classList.remove("active");
        }
        for (const c_collapse of c__collapses) {
          c_collapse.classList.remove("show");
          c_collapse.style.maxHeight = 0;
        }
        if((currentElement.dataset.id) != undefined) {
          document.querySelector(`#${currentElement.dataset.id}`).classList.add("active");
        }
      }
      
      else {
        if (currentElement.matches(".c-accordion__button")) {
          let currentCollapse = currentElement.closest(".c-accordion__header").nextElementSibling;
          // console.log('if')
          for (const c_button of c__buttons) {
            c_button.classList.remove("active");
            if((c_button.dataset.id) != undefined) {
              document.querySelector(`#${c_button.dataset.id}`).classList.remove("active");
            }
          }
          currentElement.classList.add("active");
          if((currentElement.dataset.id) != undefined) {
            document.querySelector(`#${currentElement.dataset.id}`).classList.add("active");
          }



          for (const c_collapse of c__collapses) {
            c_collapse.classList.remove("show");
            c_collapse.style.maxHeight = 0;
          }
          currentCollapse.classList.add("show");
          currentCollapse.style.maxHeight = currentCollapse.scrollHeight + "px";
        }
      }
    });
  }
}

window.addEventListener("load", function() {
  homeAccordion();
})