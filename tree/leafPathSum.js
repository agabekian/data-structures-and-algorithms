var hasPathSum = function (root, targetSum) {
    if (!root) return false;

    function traverse(node, sum) {
        if (!node) return false; //Base case: if we get this far means no true sum found.

        sum += node.val;

        // Check if the current node is a leaf and if the sum equals targetSum
        if (!node.left && !node.right) return sum === targetSum;

        return traverse(node.left, sum) || traverse(node.right, sum)
    }
    return traverse(root, 0)
};