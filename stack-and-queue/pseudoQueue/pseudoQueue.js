class PseudoQueue {
    constructor() {
        this.stack1 = [];
        this.stack2 = [];
    }

    enqueue(value) {
        // Move all elements from stack2 to stack1
        while (this.stack2.length > 0) {
            this.stack1.push(this.stack2.pop());
        }
        // Push the new element onto stack1
        this.stack1.push(value);
    }

    dequeue() {
        // Move all elements from stack1 to stack2
        while (this.stack1.length > 0) {
            this.stack2.push(this.stack1.pop());
        }
        // Pop the top element from stack2
        return this.stack2.pop();
    }

    isEmpty() {
        return this.stack1.length === 0 && this.stack2.length === 0;
    }

    size() {
        return this.stack1.length + this.stack2.length;
    }

    // For testing or debugging purpose, to see the content of the queue
    printQueue() {
        console.log("Queue content:");
        console.log(this.stack1.concat(this.stack2.reverse()));
    }
}

// Example usage:
const queue = new PseudoQueue();
queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);
queue.printQueue(); // Output: [1, 2, 3]
console.log(queue.dequeue()); // Output: 1
console.log(queue.dequeue()); // Output: 2
queue.printQueue(); // Output: [3]
console.log(queue.size()); // Output: 1


module.exports = PseudoQueue;