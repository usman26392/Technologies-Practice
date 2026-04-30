
// node js , event module


import { EventEmitter } from 'node:events';

// creating a custom event emitter by extending the EventEmitter class
class MyEmitter extends EventEmitter {}

// creating an instance of the custom event emitter
const myEmitter = new MyEmitter();


function greetHandler() {
    console.log("Hello world! from event handler")
}

function byeHandler() {
    console.log("Goodbye world! from event handler")
}


// Registering event handlers
myEmitter.on('greet', greetHandler);
myEmitter.on('bye', byeHandler);

// Emitting events
myEmitter.emit('greet');
myEmitter.emit('bye');

