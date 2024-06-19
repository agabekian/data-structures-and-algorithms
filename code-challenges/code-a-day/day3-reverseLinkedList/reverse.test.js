const Node = require('../../../linked-list/Node');
const reverse = require('./reverse');

test('reverse an empty linked list', () => {
    const head = null;
    const reversedHead = reverse(head);
    expect(reversedHead).toBeNull();
});

test('reverse a single node linked list', () => {
    const head = new Node(1);
    const reversedHead = reverse(head);
    expect(reversedHead).toBe(head);
    expect(reversedHead.next).toBeNull();
});

test('reverse a linked list with two nodes', () => {
    const head = new Node(1);
    head.next = new Node(2);
    const reversedHead = reverse(head);
    expect(reversedHead.val).toBe(2);
    expect(reversedHead.next.val).toBe(1);
    expect(reversedHead.next.next).toBeNull();
});

test('reverse a linked list with multiple nodes', () => {
    const head = new Node(1);
    head.next = new Node(2);
    head.next.next = new Node(3);
    head.next.next.next = new Node(4);
    head.next.next.next.next = new Node(5);

    const reversedHead = reverse(head);

    expect(reversedHead.val).toBe(5);
    expect(reversedHead.next.val).toBe(4);
    expect(reversedHead.next.next.val).toBe(3);
    expect(reversedHead.next.next.next.val).toBe(2);
    expect(reversedHead.next.next.next.next.val).toBe(1);
    expect(reversedHead.next.next.next.next.next).toBeNull();
});
