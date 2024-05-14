// Import the PseudoQueue class
const PseudoQueue = require('../pseudoQueue/pseudoQueue');


// Mock Stack class
class Stack {
    constructor() {
        this.items = [];
    }
    isEmpty() {
        return this.items.length === 0;
    }
    push(item) {
        this.items.push(item);
    }
    pop() {
        return this.items.pop();
    }
    size() {
        return this.items.length;
    }
}

// Test cases for PseudoQueue class
describe('PseudoQueue', () => {
    let queue;

    beforeEach(() => {
        queue = new PseudoQueue();
    });

    test('enqueue and dequeue elements', () => {
        queue.enqueue(1);
        queue.enqueue(2);
        queue.enqueue(3);

        expect(queue.dequeue()).toBe(1);
        expect(queue.dequeue()).toBe(2);
        expect(queue.dequeue()).toBe(3);
        expect(queue.isEmpty()).toBe(true);
    });

    test('size of the queue', () => {
        queue.enqueue(1);
        queue.enqueue(2);
        queue.enqueue(3);

        expect(queue.size()).toBe(3);
        queue.dequeue();
        expect(queue.size()).toBe(2);
    });

    test('check if the queue is empty', () => {
        expect(queue.isEmpty()).toBe(true);
        queue.enqueue(1);
        expect(queue.isEmpty()).toBe(false);
    });
});
