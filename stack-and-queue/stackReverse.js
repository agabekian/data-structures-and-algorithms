const {Queue, Stack} = require("./stack-and-queue");
let test = new Stack;
test.push(101)
test.push("not");
test.push("Dudes are");
console.log(test.peek())

function reverse(stack) {
    let q = new Queue();
    // Transfer elements from stack to queue
    console.log("Transferring elements from stack to queue...", stack.peek());

    while (stack.peek()) {
        let item = stack.pop();
        console.log(`Popped from stack: ${item}`);
        q.enqueue(item);
        console.log("q-----------", q);
    }
    console.log("PEEK NO MORE",stack.peek())

    // Transfer elements back from queue to stack
    console.log("Transferring elements from queue back to stack...");
    while (q.peek()) {
        let item = q.dequeue();
        console.log(`Dequeued from queue: ${item}`);
        stack.push(item);
    }

    return stack;
}

console.log("RESULT", reverse(test).peek())




