


/**
 *  set color
 */
// document.querySelector(".hdr").style.background = "blue";



/**
 *  another way to set color:
 * jo b css hum javaScript k through lagatay hayn, wo sari inline lagti hay.
 */
// let setColor = document.querySelector(".hdr");
// setColor.style.backgroundColor = "purple";
// setColor = document.querySelector(".hdr h1").style.color = "aqua";


/**
 * property: className
 * agar element par dosri classes lag rahi hungi toh wo hat jahayn gi.
 * unki jaga class "hdr-2" lgay gi.
 */
// let elementVariable = document.querySelector(".hdr-1").className = "hdr-2";



/**
 *  Built-in property: classList
 * is property ka yey faida hay k is may hum , bagair kisi class
 * ko hatae apni classes add karwa sakhtay hayn. is method k zariye say.
 */
let elementReference = document.querySelector(".hdr-1").classList.add("hdr-2");



/**
 * hum aik say zayeda classes b add karsaktay hayn.
 */
// let elementReference =
// document.querySelector(".hdr-1").classList.add("hdr-2","hdr-3");


/**
 * or hum kisi b class ko remove b karsaktay hayn:
 */
let elementReference =
 document.querySelector(".hdr").classList.remove("hdr-1");