class TreeNode {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}
function areIdenticalTrees(root1, root2) {
    if (root1 === null && root2 === null) return true;
    // If one root is null and the other is not, they are not identical
    if (root1 === null || root2 === null) return false;
    // Check if current nodes have the same value
    if (root1.value !== root2.value) return false; //boom!.. exit

    // Recursively check left and right subtrees
    return (
        areIdenticalTrees(root1.left, root2.left) && areIdenticalTrees(root1.right, root2.right)
    );
}

// Example usage:
// Constructing two identical trees
let tree1 = new TreeNode(1);
tree1.left = new TreeNode(2);
tree1.right = new TreeNode(3);
tree1.left.left = new TreeNode(4);
tree1.left.right = new TreeNode(5);

let tree2 = new TreeNode(1);
tree2.left = new TreeNode(2);
tree2.right = new TreeNode(3);
tree2.left.left = new TreeNode(4);
tree2.left.right = new TreeNode(5);

// Comparing the trees
console.log(
    areIdenticalTrees(tree1, tree2)
); // Output: true
