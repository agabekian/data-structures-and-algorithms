function kthFromEnd(k) {
    if (!this.head || k < 0) return null;
    
    let slow = this.head;
    for (let i = 0; i < k; i++) {
        if (slow.next) {
            slow = slow.next;
        } else 
            // k is greater than the length of the list
            return null;
    }

    let fast = this.head;
    while (slow.next) {
        slow = slow.next;
        fast = fast.next;
    }

    return fast.value;
}