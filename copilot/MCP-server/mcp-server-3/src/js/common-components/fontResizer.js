
function fontResizer() {
  let perc = parseInt(window.innerWidth) / 120;
  document.body.style.fontSize = perc + "px";
}

window.addEventListener("resize", (event) => {
  let sw = window.innerWidth;
  let sh = window.innerHeight;
  if (sw > 1025) {
    if (sw < 1400 && sw > 1300 && sh > 900) {
    } else {
      fontResizer();
    }
  }
});

export default fontResizer;
