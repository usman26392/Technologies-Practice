/**
 * ----------- Avoiding conflicts with other libraries ---------
 */

/**
 * Putting jQuery Into No-Conflict Mode
 */

   //  let $jq = jQuery.noConflict();
   // //  $jq(document).ready(function(){
   // //      $jq("h1").hide(500);
   // //  });
   
   // // or
   //  $jq(function() {
   //     $jq("h1").hide(600);
   //  });

    
/**
 *  jQuery Into No-Conflict Mode
 *  jub hum dollar hi use karna chahatay hun
 */    

// jQuery.noConflict();
// jQuery(function($) {
//    $("h1").hide(800);
// });


/**
 * Including jQuery Before Other Libraries:
 * jub hum jQuery library ko , libraries may sub say 
 * top par rakh kar use karayn gay toh noConflict() ka method
 * use karnay ki zarorat nahi ho gi, bus jQuery ka full name use karna hoga. 
 */

// jQuery(function() {
//    jQuery("h1").hide(1500);
// });

/**
 * Use an Immediately Invoked Function Expression (IIFE)
 */

jQuery.noConflict();

(function($) {
   $("h1").hide(1800);
})(jQuery);


(function($) {
   $("button").on("click", function() {
      $(".list-1").toggle("slow");
   });
})(jQuery);
