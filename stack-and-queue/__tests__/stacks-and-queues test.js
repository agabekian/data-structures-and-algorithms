const { Stack, Queue } = require('../stack-and-queue');


describe('Stack', () => {
    test('push', () => {
        const stack = new Stack();
        stack.push(1);
        expect(stack.peek()).toBe(1);
    });

    test('pop', () => {
        const stack = new Stack();
        stack.push(1);
        expect(stack.pop()).toBe(1);
    });

    test('pop on empty stack', () => {
        const stack = new Stack();
        expect(() => stack.pop()).toThrowError('Stack is empty');
    });

    test('peek', () => {
        const stack = new Stack();
        stack.push(1);
        expect(stack.peek()).toBe(1);
    });

    test('peek on empty stack', () => {
        const stack = new Stack();
        expect(() => stack.peek()).toThrowError('Stack is empty');
    });

    test('isEmpty', () => {
        const stack = new Stack();
        expect(stack.isEmpty()).toBe(true);
        stack.push(1);
        expect(stack.isEmpty()).toBe(false);
    });
});

describe('Queue', () => {
    test('enqueue', () => {
        const queue = new Queue();
        queue.enqueue(1);
        expect(queue.peek()).toBe(1);
    });

    test('dequeue', () => {
        const queue = new Queue();
        queue.enqueue(1);
        expect(queue.dequeue()).toBe(1);
    });

    test('dequeue on empty queue', () => {
        const queue = new Queue();
        expect(() => queue.dequeue()).toThrowError('Queue is empty');
    });

    test('peek', () => {
        const queue = new Queue();
        queue.enqueue(1);
        expect(queue.peek()).toBe(1);
    });

    test('peek on empty queue', () => {
        const queue = new Queue();
        expect(() => queue.peek()).toThrowError('Queue is empty');
    });

    test('isEmpty', () => {
        const queue = new Queue();
        expect(queue.isEmpty()).toBe(true);
        queue.enqueue(1);
        expect(queue.isEmpty()).toBe(false);
    });
});
