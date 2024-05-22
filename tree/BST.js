// Node class to represent individual nodes in the tree
const {Queue} = require("../stack-and-queue/stack-and-queue");
const BinaryTree = require("./BinaryTree");

class Node {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
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



    // tree-breadth-first() {
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



module.exports = BinarySearchTree;
