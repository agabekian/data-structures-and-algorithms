const Queue = require('../../../stack-and-queue/Queue');
const sumUpQueue = require('./sumUpQueue');

describe('sumUpQueue function', () => {
    test('should return 0 for an empty queue', () => {
        const q = new Queue();
        expect(sumUpQueue(q)).toBe(0);
    });

    test('should return the sum of elements in the queue', () => {
        const q = new Queue();
        q.enqueue(11);
        q.enqueue(22);
        q.enqueue(33);
        expect(sumUpQueue(q)).toBe(11 + 22 + 33);
    });

    test('should update the size correctly after dequeueing elements', () => {
        const q = new Queue();
        q.enqueue(11);
        q.enqueue(22);
        q.enqueue(33);
        sumUpQueue(q);
        expect(q.size).toBe(0);
    });
});
