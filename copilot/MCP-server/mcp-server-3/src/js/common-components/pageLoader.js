import fontResizer from "./fontResizer";


function pageLoader() {
  document.querySelector("html").classList.add("loadjs");
  setTimeout(function () {
    if (document.querySelector(".loader-first")) {
      document.querySelector(".loader-first").classList.add("loader-closed");
      document.querySelector("html").classList.remove("loadjs");
    }
  }, 2000);
}


window.addEventListener("load", function() {
  pageLoader();
  if (window.innerWidth > 1199) {
    fontResizer();
  }
});



export default pageLoader;
