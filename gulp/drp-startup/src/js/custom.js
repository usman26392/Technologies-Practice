var sw = window.innerWidth;
var sh = window.innerHeight;
var header = document.querySelector("header");
var sticky = 0;


// var HomeSlider = ["homeTrustedSlider", "homeServicesSlider", "VacanciesSlider", "TestimonialsSlider"];


// Font Resizer-------------------Start
function fontResizer() {
    var perc = parseInt(sw) / 118.9375;
    document.body.style.fontSize = perc + 'px';
}



// Loader-------------------Start
function pageLoader() {
    setTimeout(function () {
        document.querySelector(".loader-first").style.display = 'none';
        document.querySelector("html").classList.remove("loadjs");
    }, 700);
}


// Navigation Active-------------------Start
let toggleMenu = document.querySelector('#toggle');
let htmlEl = document.querySelector("html");

toggleMenu.addEventListener("click", (event) => {
    console.log('this', event)
    let _this = event.target;
    _this.classList.toggle('active');
    document.querySelector('.navigation').classList.toggle('open')
    htmlEl.classList.toggle("overflow-hidden");
})


// Home Section-------------------Start
let secondSection = document.querySelector('.perfect-solution__perfect-card');

if (secondSection) {
    secondSection.addEventListener("click", (event) => {
        console.log('this', event)
        let __this = event.target;
        document.querySelector('.perfect-solution__wardrobe-customization').classList.toggle('active');
    })
}

var acc = document.getElementsByClassName("toggle-btn");
var i;

for (i = 0; i < acc.length; i++) {
    acc[i].querySelector('p').addEventListener("click", function () {
        this.classList.toggle("opened");

        /* Toggle between hiding and showing the active panel */
        var panel = this.nextElementSibling;
        console.log('checking height', panel.style.maxHeight)
        if (panel.style.maxHeight) {
            panel.style.maxHeight = null;
        } else {
            panel.style.maxHeight = panel.scrollHeight + "px";
        }
    });
}

// Footer Mob Dropdown-----END


var accordion = document.getElementsByClassName("faqs__faq-accordion");
var j;

for (j = 0; j < accordion.length; j++) {
    accordion[j].querySelector('h4').addEventListener("click", function () {
        this.classList.toggle("opened");

        /* Toggle between hiding and showing the active panel */
        var panel = this.nextElementSibling;
        // console.log('checking height', panel.style.maxHeight)
        if (panel.style.maxHeight) {
            panel.style.maxHeight = null;
        } else {
            panel.style.maxHeight = panel.scrollHeight + "px";
        }
    });
}

// Landscape Mode off----------------Start
function landscapeModeOff() {
    if (sh < 450 && sw > 480 && sw < 820) {
        document.getElementById("portrait-warnning").style.display = "flex";
    } else {
        document.getElementById("portrait-warnning").style.display = "none";
    }
}



// Sticky Header----------------Start
function stickyHeader() {
    if (window.pageYOffset > sticky) {
        header.classList.add("sticky");
    } else {
        header.classList.remove("sticky");
    }
}



// if (sw < 767) {
//     if (document.querySelector('.our-partners__partner-slider')) {
//         var partnerSlider = new Swiper(".our-partners__partner-slider", {
//             slidesPerView: 2,
//             loop: true,
//             speed: 2000,
//             autoplay: {
//                 enable: true,
//                 delay: 2000,
//                 disableOnInteraction: false,
//             },
//         });
//     }
// }


// home hero image/video slider
if (document.querySelector('.home-hero__slider')) {
    var homeImage = new Swiper(".home-hero__slider", {
        slidesPerView: 1,
        loop: false,
        speed: 2000,
        allowTouchMove: false,
        observeParents: true,
        observer: true,
        autoplay: {
            delay: 2500,
            disableOnInteraction: false,
        },
    });
}

// feature slider
if (document.querySelector('.feature_slider')) {
    var featureSlider = new Swiper(".feature_slider", {
        slidesPerView: 1,
        spaceBetween: 16,
        loop: false,
        speed: 2000,
        observeParents: true,
        observer: true,
        pauseOnMouseEnter: true,
        autoplay: {
            delay: 2500,
            disableOnInteraction: true,
        },
        breakpoints: { 
            768: {
                slidesPerView: 2,
                spaceBetween: 20,
            },
            1200: {
                slidesPerView: 3,
                spaceBetween: 40,
            },
        }
    });
}


// holiday homes slider
if (document.querySelector('.holiday_slider')) {
    var holidaySlider = new Swiper(".holiday_slider", {
        slidesPerView: 1,
        spaceBetween: 16,
        loop: false,
        speed: 2000,
        observeParents: true,
        observer: true,
        autoplay: {
            delay: 2500,
            disableOnInteraction: false,
        },
        breakpoints: { 
            768: {
                slidesPerView: 2,
                spaceBetween: 20,
            },
            1200: {
                slidesPerView: 3,
                spaceBetween: 40,
            },
        }
    });
}



// home interior design slider
if (document.querySelector('.interior-designs_slider')) {
    var homeInterioreSlider = new Swiper(".interior-designs_slider", {
        slidesPerView: 1,
        loop: true,
        speed: 2000,
        observeParents: true,
        observer: true,
        spaceBetween: 20,
        autoplay: {
            delay: 1500,
            disableOnInteraction: false,
        },
        breakpoints: { 
            576: {
                slidesPerView: 2,
                spaceBetween: 20,
            },
            992: {
                slidesPerView: "auto",
                spaceBetween: 0,
            },
         }
    });
}

// blogs of home page slider
if (document.querySelector('.blogs-slider-wrapper')) {
    var homeBlogSlider = new Swiper(".blogs-slider-wrapper .blogs-slider", {
        slidesPerView: 1,
        centeredSlides: true,
        loop: true,
        speed: 2000,
        observeParents: true,
        observer: true,
        // autoplay: {
        //     delay: 1500,
        //     disableOnInteraction: false,
        // },
        navigation: {
            nextEl: ".blogs-slider-wrapper .swiper-button-next",
            prevEl: ".blogs-slider-wrapper .swiper-button-prev",
        },
        breakpoints: { 
            992: {
                slidesPerView: "auto",
            }
        }
    });
}




// thumb of timeline history
if (document.querySelector('.historyContent')) {
    var timeThumbSlider = new Swiper(".historyContent > .swiper", {
        slidesPerView: 1,
        loop: true,
        speed: 2000,
        observeParents: true,
        observer: true,
        effect: "fade",
    });
}


// timeline history
if (document.querySelector('.history-timeline__slider')) {
    var timelineSlider = new Swiper(".history-timeline__slider > .swiper", {
        slidesPerView: "auto",
        loop: true,
        speed: 2000,
        observeParents: true,
        observer: true,
        // autoplay: {
        //     delay: 1500,
        //     disableOnInteraction: false,
        // },
        thumbs: {
            swiper: timeThumbSlider,
        }
    });
}














// SVG Covert Code

let svgs = document.querySelectorAll('img.svg-convert');

svgs.forEach((el) => {
    const imgID = el.getAttribute('id');
    const imgClass = el.getAttribute('class');
    const imgURL = el.getAttribute('src');

    fetch(imgURL)
        .then((response) => response.text())
        .then(data => {
            const parser = new DOMParser();
            const xmlDoc = parser.parseFromString(data, 'text/html');
            let svg = xmlDoc.querySelector('svg');
            if (typeof imgID !== 'undefined') {
                svg.setAttribute('id', imgID);
            }

            if (typeof imgClass !== 'undefined') {
                svg.setAttribute('class', imgClass + ' svg-converted');
            }

            svg.removeAttribute('xmlns:a');

            el.parentNode.replaceChild(svg, el);
        })
});


// Window on Load-----------------Start
window.onload = function () {
    pageLoader();
    if (sw > 1025) {
        fontResizer();
    }
};

// Window On Resize-----------------Start
window.addEventListener('resize', (event) => {
    sw = window.innerWidth;
    sh = window.innerHeight;
    landscapeModeOff();
    if (sw > 1025) {
        if (sw < 1400 && sw > 1300 && sh > 900) {} else {
            fontResizer();
        }
    }
});

// Window On Resize-----------------End


// Window On Scroll-----------------Start
window.addEventListener('scroll', (event) => {
    stickyHeader();
});
// Window On Scroll-----------------End



let btn = document.querySelector(".hero-form .btn");
btn.addEventListener("click", function(e) {
    e.preventDefault();
});



// home hero tabs
let h_tabs_item = document.querySelectorAll(".tabs--home-hero .btn"),
    tabs_list = document.querySelector(".tabs__list"),
    tabsRow = document.querySelector(".hero-form");

h_tabs_item.forEach(function(elm){
    elm.addEventListener("click", function(e){
        let currentItem = e.target;
        if(currentItem.classList.contains("active")) {
            return false;
        }
        else {
            for (let item of tabs_list.children) {
                item.classList.remove("active");
            }
            for(let row of tabsRow.children) {
                row.style.display ="none"
                console.log(row)
            }
            currentItem.classList.toggle("active");
            let currentRowID = currentItem.getAttribute("data-id"); // come property or holiday
            document.querySelector(`#${currentRowID}`).style.display = "flex";
            console.log(currentItem.getAttribute("data-id"));
        }
    });
});



// form fiels dropdown
// let formField = document.querySelectorAll(".form-field"),
//     formFieldDropdown = document.querySelectorAll(".hero-form__dropdown");


    
// formField.forEach(function(el, idx) {
//     el.addEventListener("click", function(e) {
//         formFieldDropdown.classList.add("active");
//     });
// });



// form field dropdown
let formField = document.querySelectorAll(".hero-form__col .form-field, .hero-form__dropdown-icon"),
    formFieldDropdown = document.querySelectorAll(".hero-form__dropdown");


formField.forEach(function(el, idx) {
    el.addEventListener("click", function(e) {
        let currentField = e.target;
        formFieldDropdown.forEach(function(elmm) {
            // console.log(currentField.parentElement)
            console.log(elmm)
            elmm.classList.remove("active");
            let parentEl = currentField.parentElement;
            let currentNextElSib = parentEl.nextElementSibling;
            currentNextElSib.classList.add("active");
        });
    });
});


// custom select to
const select = document.querySelectorAll('.selectBtn');
const option = document.querySelectorAll('.option');
let index = 1;

select.forEach(a => {
	a.addEventListener('click', b => {
		const next = b.target.nextElementSibling;
		next.classList.toggle('toggle');
		next.style.zIndex = index++;
	})
})
option.forEach(a => {
	a.addEventListener('click', b => {
		b.target.parentElement.classList.remove('toggle');
		
		const parent = b.target.closest('.select').children[0];
		parent.setAttribute('data-type', b.target.getAttribute('data-type'));
		parent.innerText = b.target.innerText;
	})
})





