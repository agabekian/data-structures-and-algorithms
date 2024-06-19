const LinkedList = require("../linked-list/LinkedList");

class Queue {
    constructor() {
        this.list = new LinkedList();
        this._size = 0; // Initialize the internal size property
    }

    get size() { // Getter method for size
        return this._size;
    }

    set size(value) { // Setter method for size
        this._size = value;
    }

    enqueue(value) {
        this.list.append(value);
        this.size = this.size + 1; // Increment size when enqueueing a new element
    }

    dequeue() {
        if (this.list.head === null) {
            return null;
        }
        const value = this.list.head.val;
        this.list.head = this.list.head.next;
        this.size = this.size - 1; // Decrement size when dequeuing an element
        return value;
    }

    peek() {
        if (this.list.head === null) {
            return null;
        }
        return this.list.head.val;
    }

    isEmpty() {
        return this.list.head === null;
    }
}

module.exports = Queue;
