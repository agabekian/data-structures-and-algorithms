
const insertionSortLinkedList = (head) => {
    if (!head || !head.next) {
        return head; // If the list is empty or has only one node, it's already sorted
    }

    let sortedHead = head; // Initialize sorted list with the first node
    let current = head.next;
    sortedHead.next = null;

    while (current) {
        let nextNode = current.next;

        if (current.val < sortedHead.val) {
            // Insert current node at the beginning of the sorted list
            current.next = sortedHead;
            sortedHead = current;
        } else {
            // Search for the correct position to insert current node
            let temp = sortedHead;
            while (temp.next && temp.next.val < current.val) {
                temp = temp.next;
            }
            // Insert current node after temp
            current.next = temp.next;
            temp.next = current;
        }

        // Move to the next node
        current = nextNode;
    }

    return sortedHead;
};

module.exports = insertionSortLinkedList;