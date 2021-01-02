

/**
 *  gsap tweens:
 *  gsap.to("CSS selector",
 *  {
 *    object properties: its value,
 *  });
 * 
 * OR
 * gsap.to("CSS selector",{vars object});
 * 
 * vars object is contains properties
 */

/**
  *  yaad rakhnay wali bataen:
  * 
    =>Be sure to camelCase all hyphenated properties.
        font-size should be fontSize, background-color
        should be backgroundColor.
    =>When animating positional properties such as left and top,
        it's imperative that the elements you are trying to move
        also have a CSS position value of absolute, relative,
        or fixed.

*/

 /**
  *  Built-in
  *  methods, properties, objects
  *  methods: to(), from(), fromTo()
  *  properties: CSS ki koi b property laga sakhtay hayn.
  *  different properties: rotation: , rotationX , delay, repeat :1 to n or for infinite (-1)
  *  Translate axis: x: , y: 
  *  yoyo: true,    
  *  property =>  ease: "bounce", or "linear" or "bounce.inOut" or "elastic"
  *  special property => stagger
  * 
  */


/**
 *  'Tween': koi b selector say jo object ya phir objects animate hungay
 *          wo 'aik tween' kayh lae ga.
 *  Example of a Tween:
 * gsap.from(".box", {
      x: 400,
      duration: 3
      scale: 1.5,
      duration: 2,
      rotation: 360  
   });
 *  A Tween can change a single property of a single object(element) over time.
 *  A Tween can change a multiple properties of a single object over time.
 *  A Tween can change  multiple properties of a multiple objects over time.
 *  A Tween can animate multiple objects with staggered start times.
 * */

/**
 * The gsap (object) is your access point to everything the engine does.
 * can: create animations,
 *    : configure settings,
 *    : Register plugins, eases, and effects
 *    : global control over all animations
 *    : 
 */



/**
 *    The gsap (object) has 3 main methods for creating 'Tweens' and
 *    optionally adding them to 'Timelines'
 *    1) gsap.to()
 *    2) gsap.from()
 *    3) gsap.fromTo()
 */


/**
 * to() method
 * 
 */

// gsap.to(".box", {
//     x: 400,
//     y: 200,
//     scale: 1.5,
//     duration: 3,
//     width: 400
// });



 
/**
 *  ---------- from() method ----------------
 */

  // gsap.from(".box", {
  //     x: 400,
  //     duration: 3  
  // });



/**
 *  fromTo() method
 *  ye method animation k "from to" ki tarhan hay.
 *  Syntax: 
 *  gsap.fromTo(".box-1", {vars1}, {vars2}); 
 */

// gsap.fromTo(".box-1",
//     {
//         x: 0,
//         scale: 1,
//         rotation: 0
//     },
//     {
//         x: 400,
//         scale: 1,
//         duration: 3,
//         repeat: -1,
//         ease:  "elastic.inOut(1, 0.3)",
//         yoyo: true,
//         skewX: 45
//     }
// );



// gsap.fromTo(".box-2",
//     {
//         y: 400,
//         scale: 3,
//         rotation: 0,
        
//     },
//     {
//         x: 400,
//         scale: 1.5,
//         duration: 5,
//         rotation: 360,
//         delay: 2,
//         repeat: -1,
//         yoyo: true,
//         // ease: "bounce.inOut",
//         ease: "elastic"
//     }
// );




/**
 *  Properties: delay and repeat , yoyo
 *   yoyo ki property repeat property k sath kaam 
 *   kart hay.
 *   'yoyo' ki property backward and forward wala kaam 
 *   karti hay.
 *   yaad rakhnay k liyey jesy yoyo aik game ata tha , usi 
 *   tarhan yey kaam karta hay.
 */

// gsap.to(".box-1", {
//   x: 400,
//   duration: 3,
//   delay: 1,
//   repeat: 1, /* by defualt 0 hota hay, aik martaba chalay ga 0 par */
//   yoyo: true
// });


// gsap.from(".box-2", {
//   x: 400,
//   duration: 3,
//   delay: 3,
//   repeat: -1,
//   yoyo: true
// });




/**
 *  property: ease:
 *  control the acceleration and deceleration of animation.
 */
// gsap.to(".box-1", {
//   x: 400,
//   duration: 3,
//   // ease: "bounce",           /* akirh may bounce hogi */
//   // ease: "bounce.in",       /* shuro may bounce hogi */
//   // ease: "bounce.out",         /* akirh may bounce hogi */
//   ease: "bounce.inOut"    /*  shuro may or akirh may bounce hogi */ 
// });

// gsap.to(".box-2", {
//   x: 400,
//   duration: 3,
//   ease: "linear"
// });






/**
 * special property => stagger
 * ye property aik tarhan say delay ki tarhan kaam karti hay
 * magar is may har aik k liyey different different delay nai lagta 
 * is may define karnay ka matlab ye hay k jo b stagger may time lagaen gay
 * wo time har object par bari bari lgay ga.
 * matlab ye hay k har us time k baad , aik object animate hoga.
 * is may zarori yey hay k same tween ho or multiple objects(elements)
 */


// example 1
// gsap.to(".box", {
//   x: 400,
//   duration: 3,
//   stagger: .7,
// });




// example 2

//  gsap.fromTo(".box",
//     {
//         x: 0,
//         scale: .1
//     },
//     {
//         x: 500,
//         stagger: .8,
//         duration: 3,
//         rotation: 360,
//         marginTop: 20,
//         ease: "bounce.inOut",
//         scale: 1,
//         y: 200,
//         repeat: 1,
//         yoyo: true,
//         repeat: -1
//     }
//  );

// example 3
// stagger hum as a object b use karsakhtay hayn:
//  is ki properties:
/* amount:
  each:
  from:
*/

// gsap.to(".box", {
//   x: 400,
//   duration: 3,
//   stagger: {
//     each: .8,
//     from: "end" 
//     /* by default 'left' hoti hay, is kamm yey hay 
//     k tween objects ki direction set karna */
//     // from: "center"
//     // from: "edges"
//   }
// });




/**
 *  'Timeline':
 *  aik say zayeda tweens ko group may rakhna timeline kahlata hay.
 *  =>aik tween ka timeline dosray tween k timeline k sath overlap
      hosakhta hay , ye b is ka benefit hay. 
    =>timeline aik tarhan say tween ka delay set karnay k kaam
      ata hay. 
    'Timeline' :
      A 'Timeline' is a container for 'multiple tweens'. 
      timeline ka matlab ye hay k 'time ka interval' banay ga jo hum
      set karyn gay, us time interval par , different tweens animate
        hun gay aik sath.
    =>is ka aik important point yey hay k "unique sequencing options" matlab yey 
      hay k kisi time interval par aik say zayeda 'Tweens' overlap
      karsakhaty hayn. 
    => is ka istamaal position parameter(arguments) k sath hota hay. 
 */

// below is not an example of timeline. 
// gsap.from(".container",{duration: 1, opacity: 0});
// gsap.from(".container > h2",{duration: 2, opacity: 0, delay: 1,scale: 0});
// gsap.from(".box",{duration: 1, stagger: 0.5, delay: 3,scale: 0});


/* opar wala code sai hay magar yey socho k bohut zayeda tweens hotay
  or unka delay alag alag set karna hota.
  agar set b karliya hota , us k baad kisi waja say dobara set 
  karna hota toh kitna muskhil ho jata , is problem say timeline 
  bachata hay.
  agar may chahata hun k opar walay tweens aik sath rukaen , chalaen
  toh may individually in sub tweens ko control nai karsakhta,
  is may timeline yey provide karta hay k hum saary.
  
 */


/**
 * "position parameter":
 *  allows us to control the 'start time(delay)' of our tweens
 *  in a timeline.
 */

 // example-1: aik timeline hay or us k '3 tweens' hayn.

//  without timeline:
// gsap.to(".box-1",{duration: 1, x: 400});
// gsap.to(".box-2",{duration: 1, x: 400});
// gsap.to(".box-3",{duration: 1, x: 400});

// with timeline:
// simple timeline may aik tween ki animation complete honay
// k baad dosra tween chalay ga. isi tarhan baqi hun gay
//  let animation = gsap.timeline();
//  animation
//  .to(".box-1",{duration: 1, x: 400}) // red
//  .to(".box-2",{duration: 1, x: 400}) // green 
//  .to(".box-3",{duration: 1, x: 400})  // blue

//  tween with timeline and position parameters:
//  =>position parameters ka faida yey hay k hum tweens ki animation k
//    darmiyaan gap b daal sakhtay hayn or tweens ki animation may overlapping b 
//    karwasakhtay hayn.
//  =>overlapping say murad ye hay k jesy koi tween ki animation hori hay 'usi dohraan'
//     hum dosray kisi tween ki b animation karwadayn.
// => position parameters doh tarhan k hayn aik relative position parameter,
//     dosrah hay absolute parameter


//  with timeline and position  parameters
// relative values: "+=1,.....+=n" or "-=1,........ -=n"or "<" , "<0.5"
let animation = gsap.timeline();
 animation
 .to(".box-1",{duration: 2, x: 400})
 .to(".box-2",{duration: 1, x: 400}, "+=1") 
  /*yey position parameter hay("+=1"), timeline gap is may ye hora hay k '.box-1' ki
  animation ki duration complete honay k baad  "1 second" ka 'gap' ahay ga ,
  phirh us k baad '.box-2' ki animation start ho gi.
  => "<" wala jis tween par b lagay ga is ka matlab ye hoga k wo apnay prevoius waly
     k timeinterval k sath start hoga. 
  => "<0.5" is k matlab ye hay k yey tween apnay previous tween k first second k half say
      start hoga   */
 .to(".box-3",{duration: 1, x: 400})



//  example 2
 //  with timeline and position parameters
// let animation = gsap.timeline();
// animation
// .to(".box-1",{duration: 2, x: 400})
// .to(".box-2",{duration: 1, x: 400}, "-=1") 
//  /* yey position parameter hay("-=1"), timeline overlap is may ye hora hay k '.box-1' ki
//     animation ki duration complete honay k duraan  "1 second" ka 'overlap' ahay ga 
//     .box-1 or .box-2 k tween may.
//     .box-1 k tween ka jo interval hay 0-1-2 (= duration: 2)
//     .box-2 k tween ka jo timeinterval bany ga wo ye hay 1-2
//     =>ab isko samjoh , '.box-1' ka tween jub 1 interval par pounchay ga toh 
//     .box-2 ka tween start hoja hay ga, jo k 2 interval tak sath jaen gay.

//      */
// .to(".box-3",{duration: 1, x: 400})

// opar wali example may tweens ka total duration 4s hay.
// matlab ye hay k teeno tweens 4s may complete hungay.



//  example 3
// with timeline and position absolute paremeters:
// absolute parameters ye murad yey hay k jo parameter diya jae ga
//  tween usi timeinterval par say start hoga. 
// is may overlapping ho sakhti hay.
//  absolute values: 0,1,2,3, ...............n
// mesaal k torh par hum 3 laytay hayn, toh is ka matklab ye hay k tween
// 3s k baad start hoga. matlab ye delay hay animation ka.

let animation = gsap.timeline();
animation
.to(".box-1",{duration: 2, x: 400})
.to(".box-2",{duration: 1, x: 400}, "1") 
.to(".box-3",{duration: 1, x: 400})
 
 

