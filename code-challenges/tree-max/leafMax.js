const {BinaryTree, TreeNode} = require("../../tree/BinaryTree");


function findLeafMax(node) {
    // Base case: if node is null, return negative infinity (or handle as needed)
    if (node === null) {
        return -Infinity; // Assuming all values are >= 0
    }

    // Base case: if node is a leaf (no left and right children)
    if (node.left === null && node.right === null) {
        return node.value; // Return node's value if it's a leaf
    }

    // Variables to track maximum value among leaf nodes
    let leftMax = findLeafMax(node.left);
    let rightMax = findLeafMax(node.right);

    // Return the maximum of the values found in left and right subtrees
    return Math.max(leftMax, rightMax);
}

let tree = new BinaryTree();
tree.root = new TreeNode(8);
tree.root.left = new TreeNode(11);
tree.root.left.left = new TreeNode(2);
tree.root.left.right = new TreeNode(3);
tree.root.right = new TreeNode(13);
tree.root.right.left = new TreeNode(-13);

console.log(findLeafMax(tree.root))