const Queue = require('../../../stack-and-queue/Queue');

function sumUpQueue(q, sum = 0) {
    if (!q.peek()) return sum;
    sum += q.dequeue();
    return sumUpQueue(q,sum)
}



module.exports = sumUpQueue;
