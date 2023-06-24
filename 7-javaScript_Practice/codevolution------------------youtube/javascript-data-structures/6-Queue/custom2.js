
// more optimzation of Queue
class QueueOptimized {
    constructor() {
        this.items = {};
        this.rear = 0;
        this.front = 0;
        console.log(this)
        let currentObj = this;
    }
    
    enqueue(el) {
        this.items[this.rear] = el;
        console.log(this.items[this.rear])
        this.rear++;
    }

    dequeue() {
        const item = this.items[this.front];
        delete this.items[this.front];
        this.front++;
        return item;
    }

    isEmpty() {
        return this.rear - this.front === 0;
    }

    peek() {
        return this.items[this.front]
    }

    size() {
        return this.rear - this.front;
    }

    print() {
        console.log(this.items)
    }
}


let queueObj = new QueueOptimized();
queueObj.enqueue("farhan");
queueObj.enqueue("usman");
console.log(queueObj);

queueObj.print();
queueObj.dequeue()
queueObj.print()