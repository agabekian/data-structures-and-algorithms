'use strict';

const Node = require('../SLLNode.js');
const LinkedList = require('code-challenges/linked-list-zip/zipLists');
const zipLists = require('code-challenges/linked-list-zip/zipLists.js');
// Require our linked list implementation
describe('LinkedList', () => {
    it('checking if test file works', () => expect(true).toBeTruthy());

    it('should assert an empty linked list', () => {
        let linkedList = new LinkedList();
        expect(linkedList.head).toEqual(null);
    });

    //###### CODE CH 6 ##########
    //append method test add node to the end of the list
    it('should append value ', () => {
        const ll = new LinkedList();
        ll.append(1);
        ll.append(2);
        ll.append(3);
        // ll.iterate();
        expect(ll.head.val).toEqual(1)
        && expect(ll.head.next.next.val).toEqual(3) ;
    })
    //insertBefore method before target value - here 22 in front of 2
    it('should insert value before target ', () => {
        const ll = new LinkedList();
        ll.append(1);
        ll.append(2);
        ll.append(3);
        ll.insertBefore(2,22)
        expect(ll.head.next.val).toEqual(22) ;
    })

    it('should insert value AFTER target ', () => {
        const ll = new LinkedList();
        ll.append(1);
        ll.append(2);
        ll.append(3);
        ll.insertBefore(2,33)
           expect(ll.head.next.val).toEqual(33)  //after 2
        && expect(ll.head.next.next.val).toEqual(3); // and before 3
    })
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
        l2.append(1);
        l2.append(11);
        l2.append(2);
        l2.append(22);
        l2.append(3);
        l2.append(33);

        let res = zipLists(l1,l2)
        expect(res).toEqual(Expected)  //after 2

    })

});
// it('should return the head of the list', () => {

// ... other tests
