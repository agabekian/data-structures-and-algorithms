const Queue = require('./Queue');

function rec(queue, max = 0) {
    if (!queue.peek()) return max;
    let cur = queue.dequeue();
    if (cur > max) max = cur;
    return rec(queue, max)
}

let test = new Queue();
test.enqueue(1);
test.enqueue(2);
test.enqueue(301);
test.enqueue(201);
console.log(rec(test))