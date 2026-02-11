


function landscapeOff() {
  const mql = window.matchMedia("(orientation:landscape)");
  mql.addEventListener("change", (event) => {
    if (event.matches) {
      if (innerWidth < 930) {
        // console.log("Now in landscape orientation");
        document.getElementById("portrait-warning").style.display = "flex";
      }
    } else {
      // console.log("Now in portrait orientation");
      document.getElementById("portrait-warning").style.display = "none";
    }
  });
}

export default landscapeOff;
