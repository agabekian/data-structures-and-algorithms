const Node = require('./SLLNode');

class LinkedList {
    constructor(head) {
        this.head = head;
    }

    insert(node) {
        this.head = node;
    }

    include(val) {
        let cur = this.head;
        while (cur != null) {
            if (cur.val === val)
                return true;
            cur = cur.next;
        }
        return false;
    }

    toString() {
        let s = "";
        let cur = this.head;
        while (cur != null) {
            s += (` { ${cur.val} } ->`);
            cur = cur.next;
        }
        s += (" NULL")
        console.log(s);
    }

// ################ code ch 6 ############
    append(node) {
        let cur = this.head;
        while (cur.next != null) {
            cur = cur.next;
        }
        cur.next = node;
    }

    insertBefore(target, node) {
        let cur = this.head;

        if (this.head.val === target) { //EDGE if before head
            node.next = this.head;
            this.head = node;
            return;
        }
        let prev = null;
        while (cur != null) {
            if (cur.val === target) {
                // Insert t
                node.next = cur;
                if (prev !== null)
                    prev.next = node;
                return;
            }
            prev = cur;
            cur = cur.next
        }
        //if not found
        throw new Error('Target value not found.');
    }

    insertAfter(target, node) {
        let cur = this.head;
        while (cur != null) {
            if (cur.val === target) {
                node.next = cur.next;
                cur.next = node;
            }
            cur = cur.next;
        }
        throw new Error('This is the end, no value found.');
    }
}

let node1 = new Node(11);
let node2 = new Node(8);
node1.next = node2;
let testChain = new LinkedList();
testChain.insert(node1);
let nodeToIns = new Node(13);
testChain.insertBefore(8, nodeToIns);
testChain.toString()
let nodeToInsAfter = new Node(999)
testChain.insertAfter(11, nodeToInsAfter)
console.log(testChain.toString());
