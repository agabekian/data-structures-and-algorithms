const sortStack = require('./sortStack');
const {Stack} = require('../../stack-and-queue/stack-and-queue');


describe('sortStack', () => {
    let stack;

    beforeEach(() => {
        stack = new Stack();
    });

    it('sorts an already sorted stack', () => {
        stack.push(1);
        stack.push(2);
        stack.push(3);
        stack.push(4);
        stack.push(5);

        sortStack(stack);

        expect(stack.pop()).toBe(5);
        expect(stack.pop()).toBe(4);
        expect(stack.pop()).toBe(3);
        expect(stack.pop()).toBe(2);
        expect(stack.pop()).toBe(1);
    });

    test('sorts a stack with elements in reverse order', () => {
        stack.push(5);
        stack.push(4);
        stack.push(3);
        stack.push(2);
        stack.push(1);

        sortStack(stack);

        expect(stack.pop()).toBe(5);
        expect(stack.pop()).toBe(4);
        expect(stack.pop()).toBe(3);
        expect(stack.pop()).toBe(2);
        expect(stack.pop()).toBe(1);
    });

    test('sorts a stack with random order elements', () => {
        stack.push(3);
        stack.push(1);
        stack.push(4);
        stack.push(1);
        stack.push(5);
        stack.push(9);
        stack.push(2);
        stack.push(6);
        stack.push(5);
        stack.push(3);
        stack.push(5);

        sortStack(stack);

        const sortedElements = [];
        while (!stack.isEmpty()) {
            sortedElements.push(stack.pop());
        }

        expect(sortedElements).toEqual([9, 6, 5, 5, 5, 4, 3, 3, 2, 1, 1]);
    });
});