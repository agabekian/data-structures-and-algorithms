#### Given a Linked List, Sort the values ... Iteratively.
[sortSLL.js](day4%2FsortSLL.js)

[sortSLL.test.js](day4%2FsortSLL.test.js)

function insertionSort(head):
if head is null or head.next is null:
return head

    // Initialize sorted list with the first node
    sortedHead = head
    current = head.next
    sortedHead.next = null

    while current is not null:
        nextNode = current.next
        if current.value < sortedHead.value:
            // Insert current node at the beginning of the sorted list
            current.next = sortedHead
            sortedHead = current
        else:
            // Search for the correct position to insert current node
            temp = sortedHead
            while temp.next is not null and temp.next.value < current.value:
                temp = temp.next
            // Insert current node after temp
            current.next = temp.next
            temp.next = current

        // Move to the next node
        current = nextNode

    return sortedHead
#### Whiteboard
    Original Linked List: 4 -> 2 -> 1 -> 3
    
    Initially:
    Sorted List: (empty)
    Unsorted List: 4 -> 2 -> 1 -> 3 (head)
    
    Step 1:
    Sorted List: 4 (head)
    Unsorted List: 2 -> 1 -> 3
    
    Step 2:
    Sorted List: 2 -> 4 (head)
    Unsorted List: 1 -> 3
    
    Step 3:
    Sorted List: 1 -> 2 -> 4 (head)
    Unsorted List: 3
    
    Step 4:
    Sorted List: 1 -> 2 -> 3 -> 4 (head)
    Unsorted List: (empty)

#### BigO
The time complexity (Big O notation) of insertion sort for a linked list is
𝑂
(
𝑛
2
)
O(n
2
), where
𝑛
n is the number of nodes in the linked list.

Here's why:

Outer Loop: The outer loop iterates over each node in the linked list exactly once. This loop has a time complexity of
𝑂
(
𝑛
)
O(n), where
𝑛
n is the number of nodes in the linked list.

Inner Loop: The inner loop iterates over the nodes in the sorted section of the list, which may grow with each iteration of the outer loop. In the worst case scenario, when the list is in reverse order, each node must be compared and inserted at the beginning of the sorted section. This results in a worst-case time complexity of
𝑂
(
𝑛
)
O(n) for each iteration of the outer loop.

The worst-case scenario occurs when the list is in reverse order, causing the inner loop to iterate
𝑛
n times for each node in the outer loop. As a result, the overall time complexity is
𝑂
(
𝑛
2
)
O(n
2
).

However, the space complexity of insertion sort for a linked list is
𝑂
(
1
)
O(1), as it does not require additional space proportional to the size of the input. The sorting is performed by rearranging the links between existing nodes in the list.