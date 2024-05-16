class MaxStack {
    constructor() {
        this.stack = [];
        this.maxStack = [];
    }

    push(value) {
        this.stack.push(value);
        if (this.maxStack.length === 0 || value >= this.maxStack[this.maxStack.length - 1]) {
            this.maxStack.push(value);
        }
    }

    pop() {
        if (this.stack.length === 0) {
            return null; // Stack is empty
        }
        const popped = this.stack.pop();
        if (popped === this.maxStack[this.maxStack.length - 1]) {
            this.maxStack.pop();
        }
        return popped;
    }

    getMax() {
        if (this.maxStack.length === 0) {
            return null; // Stack is empty
        }
        return this.maxStack[this.maxStack.length - 1];
    }
}

// Example usage:
const maxStack = new MaxStack();
maxStack.push(5);
maxStack.push(3);
maxStack.push(9);
console.log(maxStack.getMax()); // Output: 9
maxStack.pop();
console.log(maxStack.getMax()); // Output: 5
