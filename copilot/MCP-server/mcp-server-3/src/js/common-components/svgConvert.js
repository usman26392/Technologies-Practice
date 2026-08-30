function svgConvert() {
  window.addEventListener("load", function () {
    if (document.querySelector(".svg-convert")) {
      let svgs = document.querySelectorAll("img.svg-convert");
      svgs.forEach((el) => {
        const imgID = el.getAttribute("id");
        const imgClass = el.getAttribute("class");
        const imgURL = el.getAttribute("src");

        if (!imgURL) {
          console.error("SVG source URL is missing for element:", el);
          return;
        }

        fetch(imgURL)
          .then((response) => {
            if (!response.ok) {
              throw new Error(`Failed to load SVG file: ${imgURL} (status: ${response.status})`);
            }
            return response.text();
          })
          .then((data) => {
            const parser = new DOMParser();
            const xmlDoc = parser.parseFromString(data, "text/html");
            let svg = xmlDoc.querySelector("svg");
            if (!svg) {
              throw new Error(`No <svg> found in the fetched file: ${imgURL}`);
            }

            if (imgID) {
              svg.setAttribute("id", imgID);
            }

            if (imgClass) {
              svg.setAttribute("class", imgClass + " svg-converted");
            }

            svg.removeAttribute("xmlns:a");

            el.parentNode.replaceChild(svg, el);
          })
          .catch((error) => {
            console.error(`Error processing SVG for element:`, el, "\nError details:", error);
          });
      });
    }
  });
}

export default svgConvert;
