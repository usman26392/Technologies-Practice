
class Queue {
    constructor() {
        this.items = []
    }

    enQueue(el) {
        this.items.push(el)
    }

    deQueue() {
        return this.items.shift();
    }


    isEmpty() {
        return this.items.length === 0
    }

    peekItem() {
        if(!(this.isEmpty())) {
            return this.items[0]
        }
        else {
            return null
        }
    }

    sizeOfItems() {
        return this.items.length
    }

    displayItemsInQueue() {
        console.log(this.items)
    }
}


let enqueueObj = new Queue();

console.log(enqueueObj);
enqueueObj.enQueue("farhan");
enqueueObj.enQueue("usman");
enqueueObj.enQueue("fahad");

enqueueObj.displayItemsInQueue();

console.log("peek item, " + enqueueObj.peekItem());
console.log(enqueueObj.isEmpty());
console.log(enqueueObj.sizeOfItems())


enqueueObj.deQueue()
enqueueObj.displayItemsInQueue()