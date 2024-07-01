const {Queue} = require('../stack-and-queue/stack-and-queue');
const {BinaryTree} = require('./BinaryTree');
const {TreeNode} = require('./BinaryTree');

function bfs(root) {
    let q = new Queue();
    q.enqueue(root)
    let values = [];
    while (q.peek()) {
        let cur = q.dequeue();
        values.push(cur.val);
        if (cur.left) q.enqueue(cur.left);
        if (cur.right) q.enqueue(cur.right);
    }
    return values;
}

function bfs2(tree) {
    let res = [];
    let q = new Queue();
    q.enqueue(tree.root); //step1 pre-loop (!)
    console.log("queue", q);
    while (!q.isEmpty()) {
        let cur = q.dequeue(); //inside!
        console.log(cur)
        console.log("node", cur.value)
        res.push(cur.value);

        if (cur.left) q.enqueue(cur.left);  //major "if"s don't forget
        if (cur.right) q.enqueue(cur.right);
    }
    return res;
}

let tree = new BinaryTree();

tree.root = new TreeNode(8);
cur = tree.root;
cur.left = new TreeNode(11);
cur.right = new TreeNode(13);
console.log(tree)
console.log("res", bfs2(tree));
