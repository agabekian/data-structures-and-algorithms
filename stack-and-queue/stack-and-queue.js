const LinkedList = require('../linked-list/LinkedList');
const Node = require('../linked-list/SLLNode');

class Stack {
    constructor() {
        this.list = new LinkedList();
    }

    push(value) {
        const newNode = new Node(value);
        newNode.next = this.list.head;
        this.list.head = newNode;
    }

    pop() {
        if (this.list.head === null) {
            throw new Error("Stack is empty");
        }
        const value = this.list.head.val;
        this.list.head = this.list.head.next;
        return value;
    }

    peek() {
        if (this.list.head === null) {
            throw new Error("Stack is empty");
        }
        return this.list.head.val;
    }

    isEmpty() {
        return this.list.head === null;
    }
}

class Queue {
    constructor() {
        this.list = new LinkedList();
    }

    enqueue(value) {
        this.list.append(value);
    }

    dequeue() {
        if (this.list.head === null) {
            throw new Error("Queue is empty");
        }
        const value = this.list.head.val;
        this.list.head = this.list.head.next;
        return value;
    }

    peek() {
        if (this.list.head === null) {
            throw new Error("Queue is empty");
        }
        return this.list.head.val;
    }

    isEmpty() {
        return this.list.head === null;
    }
}


module.exports = { Stack, Queue };