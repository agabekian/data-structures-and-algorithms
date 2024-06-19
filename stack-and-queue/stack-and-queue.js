const LinkedList = require('../linked-list/LinkedList');
const Node = require('../linked-list/Node');

class Stack {
    constructor() {
        this.list = new LinkedList();
        this.count = 0;

    }


    push(value) { //say head is A -> B - C ...
        const new_node = new Node(value); //N
        new_node.next = this.list.head; //connect new node to  a head. N -> A -> B-> C - head is still A?
        // console.log(new_node, "new node next is HEAD is ", this.list.head)
        this.list.head = new_node; // assign new 'chained' list as a new head; N->A->B->C
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
            return null;
            // throw new Error("Stack is empty");

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
        this.size = 0

    }

    get lang() {
        return this.size;
    }

    set(val) {
        this.size = this.count + val
    }

    enqueue(value) {
        this.list.append(value);
    }

    dequeue() {
        if (this.list.head === null) {
            return null;
            // throw new Error("Queue is empty");
        }
        const value = this.list.head.val;
        this.list.head = this.list.head.next;
        return value;
    }

    peek() {
        if (this.list.head === null) {
            return null;
            // throw new Error("Queue is empty"); //will not work well in actual code: no return , will stall code exec
        }
        return this.list.head.val;
    }

    isEmpty() {
        return this.list.head === null;
    }
}


module.exports = {Stack, Queue};
