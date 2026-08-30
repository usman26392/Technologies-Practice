


export default function customAccordion(columns, title, listItem, device) {

  if (window.innerWidth < 576) {
    const footerCols = document.querySelectorAll(`.${columns}`);

    footerCols.forEach((col) => {
      const header = col.querySelector(`.${title}`);
      const list = col.querySelector(`.${listItem}`);

      console.log(list);

      header.addEventListener("click", () => {
        const isExpanded = list.style.maxHeight;

        // Collapse all lists
        footerCols.forEach((col) => {
          col.querySelector(`.${listItem}`).style.maxHeight = null;
        });

        // Expand the clicked list if it was not already expanded
        if (!isExpanded) {
          list.style.maxHeight = list.scrollHeight + "px";
        }

      });

      
    });
  }

  

}
