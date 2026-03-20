
class Stack {
    constructor() {
        this.items = []
    }

    // add an element to the top of the stack.
    pushItem(el) {
        this.items.push(el)
    }

    // remove the top most element from the stack.
    popItem() {
        return this.items.pop()
    }

    // get the top element without removing it. 
    peekItem() {
        return this.items[this.items.length - 1 ]
    }

    // check if the stack is empty or not 
    isEmptyStack() {
        return this.items.length === 0
    }

    // get the number of elements in the stack.
    sizeOfStackElements() {
        return this.items.length;
    }

    // visualize the elements in the stack.
    displayStack() {
        console.log(this.items.toString());
    }
}




// creating an object
let stackObj = new Stack();

// console.log(Stack);
console.log(stackObj);
// console.log(stackObj.isEmptyStack())

stackObj.pushItem("farhan");
stackObj.pushItem("usman");
stackObj.pushItem("fahad");
stackObj.pushItem("rehan");


// stackObj.popItem();
// console.log(stackObj.peekItem());
// console.log(stackObj.sizeOfStackElements())
// stackObj.displayStack();

