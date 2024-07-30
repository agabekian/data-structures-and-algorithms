var minDepth = function (root) {
    if (!root) return 0;
    let minDepth = Infinity;

    const traverse = (node, curDepth) => {
        if (!node) return; //base

        // Check if it's a leaf node! and if so set the current min depth
        if (!node.left && !node.right) minDepth = Math.min(minDepth, curDepth);

        if (node.left) traverse(node.left, curDepth + 1);  //L
        if (node.right) traverse(node.right, curDepth + 1); //R
    };
    
    traverse(root, 1);
    return minDepth;
};
