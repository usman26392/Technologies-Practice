
// for default export without curly brackets.
// import greetPerson from './greet.js';


// for named export with curly brackets.
// import {greetPerson} from './greet.js';

// for importing all
import * as messages from './greet.js'


// let displayName = greetPerson("Muhammad Usman!!!!");
// console.log(displayName);




// use of importing all.
messages.Show();
let messagePrint =  messages.greetPerson('Usman');
console.log(messagePrint);