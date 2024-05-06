const Node = require('./SLLNode');

class LinkedList {
  constructor(head) {this.head = head;
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
}

let node1 = new Node(11);
let node2 = new Node(8);
node1.next = node2;
let testChain = new LinkedList();
testChain.insert(node1);
console.log(testChain.include(8));
console.log(testChain);
testChain.toString();
