'use strict';

const Node = require('../SLLNode.js');
const LinkedList = require('../LinkedList');
const zipLists = require('../../../data-structures-and-algorithms/code-challenges/linked-list-zip/zipLists');
// Require our linked list implementation
describe('LinkedList', () => {
    it('checking if test file works', () => expect(true).toBeTruthy());

    it('should assert an empty linked list', () => {
        let linkedList = new LinkedList();
        expect(linkedList.head).toEqual(null);
    });

    //###### CC 06 ##########
    //append method test add node to the end of the list
    it('should append value ', () => {
        const ll = new LinkedList();
        ll.append(1);
        ll.append(2);
        ll.append(3);
        // ll.iterate();
        expect(ll.head.val).toEqual(1)
        && expect(ll.head.next.next.val).toEqual(3);
    })
    //insertBefore method before target value - here 22 in front of 2
    it('should insert value before target ', () => {
        const ll = new LinkedList();
        ll.append(1);
        ll.append(2);
        ll.append(3);
        ll.insertBefore(2, 22)
        expect(ll.head.next.val).toEqual(22);
    })

    it('should insert value AFTER target ', () => {
        const ll = new LinkedList();
        ll.append(1);
        ll.append(2);
        ll.append(3);
        ll.insertBefore(2, 33)
        expect(ll.head.next.val).toEqual(33)  //after 2
        && expect(ll.head.next.next.val).toEqual(3); // and before 3
    })

    // ################# CC07 ################
it('should find Kth value  from the end ', () => {
    const ll = new LinkedList();
    ll.append(1);
    ll.append(2);
    ll.append(3);
    ll.append(11);
    ll.append(22);
    ll.append(33);
    const result = ll.kthFromEnd(3); //11
    expect(result).toEqual(11);
})

    // ############## CC08 ###################
    it('should have a merged "zipped" list after zip ', () => {
        const l1 = new LinkedList();
        l1.append(1);
        l1.append(2);
        l1.append(3);

        const l2 = new LinkedList();
        l2.append(11);
        l2.append(22);
        l2.append(33);

        const expected = new LinkedList();
        expected.append(1);
        expected.append(11);
        expected.append(2);
        expected.append(22);
        expected.append(3);
        expected.append(33);

        const result = zipLists(l1, l2)
        expect(result).toEqual(expected)  //after 2
    })
});
