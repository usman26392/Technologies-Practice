
/**
 * clientX, clientY read-only properties of the mouse event interface.
 * 
     clientX
     clientY
     coordinate within the application's viewport 
 * 
 */


function Cursor() {
    let boxes = document.querySelectorAll(".custom-cursor-sec .box"),
        section = document.querySelector(".custom-cursor-sec"),
        cursorElement = document.querySelector(".cursor");

        boxes.forEach(function(box) {
            box.addEventListener('mousemove', function(e) {
                e.stopPropagation();
                if(e.target.closest(".box")) {
                    // console.log(e);
                    // console.log(e.target.closest(".box"))
                    cursorElement.classList.add("show");
                    cursorElement.style.left = (e.clientX)+'px';
                    cursorElement.style.top = (e.clientY)+'px';
                }

            });
        });

        section.addEventListener('mouseout', function(e) {
            e.stopPropagation();
            // e object: there is vary elements which are itself section and inside it elements.
            // this object: only section element
            // console.log('e object', e);
            // console.log(' "this" object' , this);
            cursorElement.classList.remove("show");
        });
}

export default Cursor;

