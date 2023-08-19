

// icon bar active class toggle
function iconToggleActiveClass(parent, iconElms) {
  let parentEl = document.querySelector(parent),
      childElms = parentEl.querySelectorAll(iconElms);
  childElms.forEach(function (childElm) {
    childElm.addEventListener("click", function () {
      let currentchildElm = this;
      if (!currentchildElm.classList.contains("active")) {
        childElms.forEach(function (childElm) {
          childElm.classList.remove("active");
        });
        currentchildElm.classList.add("active");
      }
    });
  });
}

export default iconToggleActiveClass;



