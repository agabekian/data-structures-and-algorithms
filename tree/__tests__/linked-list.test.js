const  BinarySearchTree  = require('../binaryTree');

describe('Binary Search Tree', () => {
    let bst;

    beforeEach(() => {
        bst = new BinarySearchTree();
    });

    test('Can successfully instantiate an empty tree', () => {
        expect(bst.root).toBeNull();
    });

    test('Can successfully instantiate a tree with a single root node', () => {
        bst.add(10);
        expect(bst.root.value).toBe(10);
        expect(bst.root.left).toBeNull();
        expect(bst.root.right).toBeNull();
    });

    test('Can successfully add a left child and right child properly to a node', () => {
        bst.add(10);
        bst.add(5);
        bst.add(15);
        expect(bst.root.left.value).toBe(5);
        expect(bst.root.right.value).toBe(15);
    });

    test('Can successfully return a collection from a pre-order traversal', () => {
        bst.add(10);
        bst.add(5);
        bst.add(15);
        expect(bst.preOrder()).toEqual([10, 5, 15]);
    });

    test('Can successfully return a collection from an in-order traversal', () => {
        bst.add(10);
        bst.add(5);
        bst.add(15);
        expect(bst.inOrder()).toEqual([5, 10, 15]);
    });

    test('Can successfully return a collection from a post-order traversal', () => {
        bst.add(10);
        bst.add(5);
        bst.add(15);
        expect(bst.postOrder()).toEqual([5, 15, 10]);
    });

    test('Returns true for the contains method, given an existing node value', () => {
        bst.add(10);
        bst.add(5);
        bst.add(15);
        expect(bst.contains(5)).toBe(true);
    });

    test('Returns false for the contains method, given a non-existing node value', () => {
        bst.add(10);
        bst.add(5);
        bst.add(15);
        expect(bst.contains(20)).toBe(false);
    });
});
