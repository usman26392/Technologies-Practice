import  Accordion1  from "./components/accordions/accordion";
import Cursor from "./components/custom-cursors/cursor-1";
import iconToggleActiveClass from "./components/menus/iconBar";
import Modal from "./components/modals/modal-1";
import customTab1 from "./components/tabs/tab-1";



// menus
iconToggleActiveClass(".icon-bar", ".icon-bar__icon");
iconToggleActiveClass(".icon-bar--vertical", ".icon-bar__icon");


// tabs
customTab1('.c-tabs__list', '.c-tabs__button', '.c-tabs .c-tabs__pane' );


// accordions
Accordion1();

// Modals
Modal(".modal", ".modal-backdrop", ".show-modal");

// cursors
Cursor();






