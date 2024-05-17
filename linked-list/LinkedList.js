const Node = require('./SLLNode');

class LinkedList {
    constructor() {
        this.head = null;
    }

    iterate() {
        let cur = this.head
        let counter = 0;
        while (cur) {
            console.log("cur",cur.val);
            cur = cur.next;
            counter += 1;
        }
        return counter
    }


    insert(node) {
        if (!this.head) {
            // If the linked list is empty, set the new node as the head
            this.head = node;
        } else {
            // Otherwise, link the new node to the current head and set it as the new head
            node.next = this.head;
            this.head = node;
        }
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

    append(val) {
        const newNode = new Node(val);

        // If the linked list is empty, make the new node the head
        if (!this.head) {
            this.head = newNode;
            return;
        }
        // Traverse the list to find the last node
        let cur = this.head;
        while (cur.next)
            cur = cur.next;
        // Append the new node to the last node
        cur.next = newNode;
    }

    insertBefore(target, val) {
        let newNode = new Node(val);
        let cur = this.head;

        if (this.head.val === target) { //EDGE if before head
            newNode.next = this.head;
            this.head = newNode;
            return;
        }
        let prev = null;
        while (cur != null) {
            if (cur.val === target) {
                // Insert
                newNode.next = cur;
                if (prev !== null)
                    prev.next = newNode;
                return;
            }
            prev = cur;
            cur = cur.next
        }
        //if not found
        throw new Error('Target value not found.');
    }

    insertAfter(target, val) {
        let newNode = new Node(val);
        let cur = this.head;
        while (cur != null) {
            if (cur.val === target) {
                newNode.next = cur.next;
                cur.next = newNode;
            }
            cur = cur.next;
        }
        throw new Error('This is the end, no value found.');
    }

    // ############### CC 7 ############
    kthFromEnd(k) {
        let cur = this.head;
        let slow = cur;
        let i = 0;
        while (i < k) {
            cur = cur.next; //pre-roll
        }
        while (cur != null) {
            cur = cur.next;
            slow = slow.next;
        }
        return slow.val;
    }
}



module.exports = LinkedList;
