class Navigator {
    constructor() {
        this.history = [];
        this.currentIndex = -1; // Initialize to -1 indicating no history yet.
    }

    back() {
        if (this.currentIndex > 0) {
            this.currentIndex--;
            return this.history[this.currentIndex];
        }
        return null; // No previous location
    }

    forward() {
        if (this.currentIndex < this.history.length - 1) {
            this.currentIndex++;
            return this.history[this.currentIndex];
        }
        return null; // No next location
    }

    go(location) {
        // If we're not at the end of the history array, we need to truncate the forward history
        if (this.currentIndex < this.history.length - 1) {
            this.history = this.history.slice(0, this.currentIndex + 1);
        }

        this.history.push(location);
        this.currentIndex++;
    }
}

// Example usage:
const navigator = new Navigator();

navigator.go("page1");
navigator.go("page2");
navigator.go("page3");
console.log(navigator.back());    // "page2"
console.log(navigator.back());    // "page1"
console.log(navigator.back());    // null
console.log(navigator.forward()); // "page2"
navigator.go("page4");
console.log(navigator.forward()); // null
console.log(navigator.back());    // "page2"
console.log(navigator.back());    // "page1"
console.log(navigator.back());    // null
