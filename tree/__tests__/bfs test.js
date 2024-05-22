const { BinaryTree, TreeNode } = require('../BinaryTree');

describe('BinaryTree', () => {
    describe('bfs', () => {
        test('should perform breadth-first search traversal of a binary tree', () => {
            // Create a binary tree
            const tree = new BinaryTree();
            tree.root = new TreeNode(1);
            tree.root.left = new TreeNode(2);
            tree.root.right = new TreeNode(3);
            tree.root.left.left = new TreeNode(4);
            tree.root.left.right = new TreeNode(5);
            tree.root.right.left = new TreeNode(6);
            tree.root.right.right = new TreeNode(7);

            // Expected BFS traversal result
            const expectedResult = [1, 2, 3, 4, 5, 6, 7];

            // Call the bfs method on the tree instance
            const result = tree.bfs(tree.root);

            // Assert that the result matches the expected result
            expect(result).toEqual(expectedResult);
        });

        test('should return an empty array for an empty tree', () => {
            // Create an empty binary tree
            const tree = new BinaryTree();

            // Call the bfs method on the empty tree instance
            const result = tree.bfs(tree.root);

            // Assert that the result is an empty array
            expect(result).toEqual([]);
        });
    });
});
/*
          a
       /    \
      b      c
     / \    / \
    d   e  f   g

 */

describe('BinaryTree', () => {
    describe('bfs', () => {
        test('should perform breadth-first search traversal of a binary tree', () => {
            // Create a binary tree
            const tree = new BinaryTree();
            tree.root = new TreeNode('a');
            tree.root.left = new TreeNode('b');
            tree.root.right = new TreeNode('c');
            tree.root.left.left = new TreeNode('d');
            tree.root.left.right = new TreeNode('e');
            tree.root.right.left = new TreeNode('f');
            tree.root.right.right = new TreeNode('g');

            // Expected BFS traversal result
            const expectedResult = ['a', 'b', 'c', 'd', 'e', 'f', 'g'];

            // Call the bfs method on the tree instance
            const result = tree.bfs(tree.root);

            // Assert that the result matches the expected result
            expect(result).toEqual(expectedResult);
        });
    });
});
