// Node class to represent individual nodes in the tree
const {Queue} = require("../stack-and-queue/stack-and-queue");

class Node {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

// Binary Tree class
class BinaryTree {
    constructor() {
        this.root = null;
    }

    // Pre-order traversal
    preOrder() {
        const result = [];
        const traverse = (node) => {
            if (!node) return;
            result.push(node.value);
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
            traverse(node.left);
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
            traverse(node.left);
            traverse(node.right);
            result.push(node.value);
        };
        traverse(this.root);
        return result;
    }

    treeMax(value) {
        let cur = this.root;
        let max = 0;
        while (cur) {
            if (cur.value > max) max = cur.value;
            if (value < cur.value) cur = cur.left;
            else cur = cur.right;
        }
        return false;
    }

}

// Binary Search Tree class extending BinaryTree
class BinarySearchTree extends BinaryTree {
    constructor() {
        super();
    }

    // Add method to add a value to the BST
    add(value) {
        const newNode = new Node(value);
        if (!this.root) {
            this.root = newNode;
            return;
        }
        let current = this.root;
        while (true) {
            if (value < current.value) {
                if (!current.left) {
                    current.left = newNode;
                    return;
                }
                current = current.left;
            } else {
                if (!current.right) {
                    current.right = newNode;
                    return;
                }
                current = current.right;
            }
        }
    }

    // Contains method to check if a value exists in the BST
    contains(value) {
        let current = this.root;
        while (current) {
            if (value === current.value) return true;
            if (value < current.value) current = current.left;
            else current = current.right;
        }
        return false;
    }



    // bfs() {
    //     let q = new Queue();
    //     let visited = new Queue()
    //     console.log(this.root.val)
    //     while (this.root != null) {
    //         q.enqueue(this.root.left.val);
    //         q.enqueue(this.root.right.val);
    //         visited.enqueue(q.dequeue())
    //         visited.enqueue(q.dequeue())
    //         this.root = root.left.next;
    //     }
    // }
}

const bst = new BinarySearchTree();

// Add nodes to the tree
bst.add(10);
bst.add(5);
bst.add(15);
bst.add(3);
bst.add(7);
bst.add(12);
bst.add(18);

console.log(bst.bfs())

module.exports = BinarySearchTree;
