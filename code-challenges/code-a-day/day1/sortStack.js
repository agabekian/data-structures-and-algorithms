const Stack = require('../../../stack-and-queue/stack-and-queue');

function sortStack(stack) {
    if (stack.isEmpty()) {
        return;
    }

    let topElement = stack.pop();
    sortStack(stack);
    sortedInsert(stack, topElement);
}

function sortedInsert(stack, element) {
    if (stack.isEmpty() || stack.peek() <= element) {
        stack.push(element);
    } else {
        let topElement = stack.pop();
        sortedInsert(stack, element);
        stack.push(topElement);
    }
}

module.exports = sortStack;
