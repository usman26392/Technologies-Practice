/**
 * ------------------- logical Operators --------------
 * 
 */


/**
 * logical AND:
 * true . true = true
 * false . false = false
 * true . false = false
 *  dono conditions "true" hun toh true hoga , otherwise 
 * dosri har conditions may returns false hoga. 
 */
console.log("logical AND " + ((5 > 2) && (5 > 3))); // returns true
console.log("logical AND " + ((5 < 2) && (5 > 3)) );    // returns false


/**
 * logical OR:
 * true || true = true
 * true || false = true
 * agar conditions may aik "b" conditions "true" hogai toh returns phirh "true" hoga.
 * otherwise returns false hoga.
 */
console.log("logical OR " + ((5 < 2) || (5 > 3)) );

/**
 * logical NOT:
 * koi b condition jo true hogi us ko false karday ga,
 * or jo condition false hogi usko true karday ga.
 */

 console.log("logical NOT: !(5>2)  " + ( !(5>2) ));









