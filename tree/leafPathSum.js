var pathSum = function(root, targetSum) { //leetcode 112 7.30.24
    if(!root) return [];
    let res = [];
    function traverse(node, sum, track){
        if(!node) return;

        track.push(node.val);
        sum += node.val;

        if(!node.left && !node.right){
            if(sum === targetSum)
                res.push([...track]);
        }
        // Recursively check left and right subtrees
        traverse(node.left, sum, track);
        traverse(node.right, sum, track);
        // Backtrack by removing the last element from track
        track.pop();
    }
    traverse(root, 0, []);
    return res;
};
var hasPathSum2 = function(root, targetSum) {
    if (!root) return false; // Return false if the root is null

    function traverse(node, sum) {
        if (!node) return false; // Base case for recursion

        sum += node.val; // Add current node value to sum

        // Check if the current node is a leaf and if the sum equals targetSum
        if (!node.left && !node.right) return sum === targetSum;

        // Recursively check left and right subtrees
        let leftHasPath = traverse(node.left, sum);
        let rightHasPath = traverse(node.right, sum);

        return leftHasPath || rightHasPath;
    }

    return traverse(root, 0);
};


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