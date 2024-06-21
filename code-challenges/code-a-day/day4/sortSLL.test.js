// const { Node } = require('../../../linked-list/LinkedList');
const insertionSortLinkedList = require('./sortSLL');
class ListNode {
    constructor(val, next = null) {
        this.val = val;
        this.next = next;
    }
}

describe('insertionSortLinkedList', () => {
    test('Sorts a linked list with multiple nodes', () => {
        // Create an unsorted linked list: 4 -> 2 -> 1 -> 3
        const node4 = new ListNode(4);
        const node2 = new ListNode(2);
        const node1 = new ListNode(1);
        const node3 = new ListNode(3);

        node4.next = node2;
        node2.next = node1;
        node1.next = node3;

        // Sort the linked list
        const sortedHead = insertionSortLinkedList(node4);

        // Expected sorted linked list: 1 -> 2 -> 3 -> 4
        let current = sortedHead;
        expect(current.val).toBe(1);
        current = current.next;
        expect(current.val).toBe(2);
        current = current.next;
        expect(current.val).toBe(3);
        current = current.next;
        expect(current.val).toBe(4);
        expect(current.next).toBeNull();
    });

    test('Sorts a linked list with a single node', () => {
        // Create a linked list with a single node: 5
        const node5 = new ListNode(5);

        // Sort the linked list
        const sortedHead = insertionSortLinkedList(node5);

        // Expected sorted linked list: 5
        expect(sortedHead.val).toBe(5);
        expect(sortedHead.next).toBeNull();
    });

    test('Returns null for an empty linked list', () => {
        // Sort an empty linked list
        const sortedHead = insertionSortLinkedList(null);

        // Expected result: null
        expect(sortedHead).toBeNull();
    });
});