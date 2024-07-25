const Stack = require('../../../stack-and-queue/stack-and-queue');

function sortStack(stack) {
    if (stack.isEmpty()) return; //base case

    let top = stack.pop();
    sortStack(stack);
    sortedInsert(stack, top);
}

function sortedInsert(stack, val) {
    if (stack.isEmpty() || stack.peek() <= val) {
        stack.push(val);
    } else {
        let top = stack.pop();
        sortedInsert(stack, val);
        stack.push(top);
    }
}

module.exports = sortStack;
