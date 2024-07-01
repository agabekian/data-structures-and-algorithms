const {Queue} = require("../stack-and-queue/stack-and-queue");

class TreeNode {
    constructor(val) {
        this.value = val;
        this.left = this.right = null;
    }
}

class BinaryTree {
    constructor() {
        this.root = null;
    }

    // Pre-order traversal
    preOrder() {
        const result = [];
        const traverse = (node) => {
            if (!node) return;
            result.push(node.value);  // C -> L -> R
            traverse(node.left);
            traverse(node.right);
        };
        traverse(this.root);
        return result;
    }

    // In-order traversal
    inOrder() {
        const result = [];
        const traverse = (node) => {
            if (!node) return;
            traverse(node.left); // L -> C -> R
            result.push(node.value);
            traverse(node.right);
        };
        traverse(this.root);
        return result;
    }

    // Post-order traversal
    postOrder() {
        const result = [];
        const traverse = (node) => {
            if (!node) return;
            traverse(node.left);  // L -> R -> C
            traverse(node.right);
            result.push(node.value);
        };
        traverse(this.root);
        return result;
    }

// ################### CC16 #############################
    findMaxValue() {
        // Helper function for recursive traversal
        const findMax = (node, curMax) => {
            if (!node) return curMax; //bc
            console.log(
                node.value, curMax
            )
            curMax = Math.max(curMax, node.value); //update max
            // Recursively check left and right subtrees
            curMax = findMax(node.left, curMax);
            curMax = findMax(node.right, curMax);
            return curMax;
        };
        // Start traversal from the root
        if (!this.root) return null;
        return findMax(this.root, Number.NEGATIVE_INFINITY);
    }

    //################ CC17 ##########################
    bfs(root) {
        let res = [];
        let q = new Queue();
        q.enqueue(root); //step1 pre-loop (!)
        while (!q.isEmpty()) {
            let cur = q.dequeue(); //inside!
            res.push(cur.value);

            if (cur.left) q.enqueue(cur.left);  //major "if"s don't forget
            if (cur.right) q.enqueue(cur.right);
        }
        return res;
    }
}


module.exports = {BinaryTree, TreeNode};
