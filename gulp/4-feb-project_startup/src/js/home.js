
var sw = window.innerWidth;
var sh = window.innerHeight;
var header = document.querySelector("header");
var sticky = 0;


// Font Resizer-------------------Start
function fontResizer() {
    var perc = parseInt(sw) / 118.9375;
    document.body.style.fontSize = perc + 'px';
}


// Loader-------------------Start
function pageLoader() {
    // document.querySelector("html").classList.add("loadjs");
    setTimeout(function () {
        document.querySelector(".loader-first").style.display = 'none';
        document.querySelector("html").classList.remove("loadjs");
    }, 700);
}


// Navigation slide Active on a mobile 
let toggleMenu = document.querySelector('#toggle');
let htmlEl = document.querySelector("html");

toggleMenu.addEventListener("click", (event) => {
    console.log('this', event)
    let _this = event.target;
    _this.classList.toggle('active');
    document.querySelector('.navigation').classList.toggle('open')
    htmlEl.classList.toggle("overflow-hidden");
})

// accordion
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

// Landscape Mode off 
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


// SVG Convert Code
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
    if (sw > 1199) {
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


// Window On Scroll-----------------Start
window.addEventListener('scroll', (event) => {
    stickyHeader();
});

// -------------------- above code will be common for all websites --------------------------




// example for sample
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


// hero home slider
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



console.log("this code is comming from home's js");
