const { BinaryTree, TreeNode } = require('../BinaryTree')

describe('BinaryTree', () => {
    describe('findMaxValue', () => {
        test('returns null for an empty tree', () => {
            const tree = new BinaryTree();
            expect(tree.findMaxValue()).toBeNull();
        });

        test('returns the maximum value for a tree with one node', () => {
            const tree = new BinaryTree();
            tree.root = new TreeNode(10);
            expect(tree.findMaxValue()).toBe(10);
        });

        test('returns the maximum value for a tree with multiple nodes', () => {
            const tree = new BinaryTree();
            tree.root = new TreeNode(10);
            tree.root.left = new TreeNode(5);
            tree.root.right = new TreeNode(15);
            tree.root.left.left = new TreeNode(3);
            tree.root.left.right = new TreeNode(7);
            tree.root.right.right = new TreeNode(20);
      //      10
      //     /   \
      //   5      15
      //  / \       \
      // 3   7      20
            expect(tree.findMaxValue()).toBe(20);
        });

        test('returns the maximum value for a tree with negative values', () => {
            const tree = new BinaryTree();
            tree.root = new TreeNode(-10);
            tree.root.left = new TreeNode(-5);
            tree.root.right = new TreeNode(-15);
            tree.root.left.left = new TreeNode(-3);
            tree.root.left.right = new TreeNode(-7);
            tree.root.right.right = new TreeNode(-20);
            expect(tree.findMaxValue()).toBe(-3);
        });
    });
});
