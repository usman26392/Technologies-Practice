

/**
 * ---------- incomplete hay yey code abi
 * .c-accordion__collapse__body panel par click karo toh error ara hay.
 */


export default function Accordion1() {

    let c__accordion = document.querySelector('.c-accordion'),
        c__buttons = c__accordion.getElementsByClassName('c-accordion__button'),
        c__collapses = c__accordion.getElementsByClassName('c-accordion__collapse');


    c__accordion.addEventListener('click', function(e) {
        let currentElement = e.target;
        // console.log(e);
        // console.log(this);

        // for accordion buttons
        if(currentElement.matches(".c-accordion__button.active")) {
            for (const c_button of c__buttons) {
                c_button.classList.remove('active');
            }
            for (const c_collapse of c__collapses) {
                c_collapse.classList.remove('show');
                c_collapse.style.maxHeight = 0;
            }
        }
        else {
            if(currentElement.matches(".c-accordion__button")) {
                let currentCollapse = currentElement.closest('.c-accordion__header').nextElementSibling;
                // console.log('if')
                for (const c_button of c__buttons ) {
                    c_button.classList.remove('active');   
                }
                currentElement.classList.add('active');
                
                for (const c_collapse of c__collapses) {
                    c_collapse.classList.remove('show');
                    c_collapse.style.maxHeight = 0;
                }
                currentCollapse.classList.add('show');
                currentCollapse.style.maxHeight = currentCollapse.scrollHeight + 'px';
            }
        }

    });


}