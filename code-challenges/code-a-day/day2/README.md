# Day 2 

[//]: # (Tuesday 6.18.24. Had a whiteboard challenge this morning)
## Given a Queue, Find the sum of all elements ... Recursively.
[sumUpQueue.js](sumUpQueue.js)

[sumUpQueue.test.js](sumUpQueue.test.js)
##### Process
1. Init a var to store sum;
2. Set the base case where queue is empty, return sum
2. ###### Logic: Dequeue queue element and add to sum
3. Recursive call function passing sum and  queue state




Let's analyze the time complexity (Big O) of the `sumUpQueue` algorithm.

### Time Complexity Analysis

The `sumUpQueue` algorithm utilizes recursion to sort the stack. Here's the breakdown of the time complexity:

1. **Recursive Sorting**:
    - At each recursive call, we pop an element from the stack until the stack becomes empty. This process requires traversing the entire stack once per recursive call.
    - If the stack has \( n \) elements, each recursive call requires \( O(n) \) time.
    - Since the recursion continues until the stack becomes empty, there will be \( O(n) \) recursive calls in total.
    - Thus, the time complexity of recursive sorting is \( O(n^2) \).

2. **Sorted Insertion**:
    - After the stack is sorted recursively, we insert each popped element back into the stack in sorted order using the `sortedInsert` function.
    - Insertion into a sorted stack takes \( O(1) \) time if the stack is already sorted.
    - Since we insert each element once, the total time complexity for sorted insertion is \( O(n) \).

### Overall Time Complexity

Considering both the recursive sorting and the sorted insertion, the dominant factor is the recursive sorting, which contributes \( O(n^2) \) to the overall time complexity.

Therefore, the overall time complexity of the `sumUpQueue` algorithm is \( O(n^2) \), where \( n \) is the number of elements in the stack.

### BigO
##### Space Complexity
The space complexity is influenced by the recursive calls and any additional space used by the function. In this case:

###### Recursive call stack: The function will make a recursive call for each element in the queue, leading to
𝑛
n recursive calls on the call stack. Each recursive call adds a frame to the call stack, which consumes
𝑂
(
𝑛
)
O(n) space.
Additional space: The sum variable and the queue itself do not consume additional space proportional to the input size, so they are considered
𝑂
(
1
)
O(1).
Thus, the space complexity due to the call stack is
𝑂
(
𝑛
)
O(n).

Time Complexity
The function performs the following operations:

Peek the queue: q.peek()
Dequeue an element: q.dequeue()
Recursive call: sumUpQueue(q, sum)
Assuming that peek() and dequeue() are both
𝑂
(
1
)
O(1) operations, let's look at the function's behavior:

For each element in the queue, the function performs a constant number of operations (
𝑂
(
1
)
O(1)).
The function is called recursively once for each element in the queue.
Therefore, if the queue has
𝑛
n elements, the function will be called
𝑛
n times, making the overall time complexity
𝑂
(
𝑛
)
O(n).

   
####  Whiteboard
    --------------------------------------------------
        |                                                |
        |                sumUpQueue(stack)                |
        |                                                |
        --------------------------------------------------
        |                                                |
        |  if stack is empty:                           |
        |      return                                    |
        |                                                |
        |  topElement = stack.pop()                      |
        |  sumUpQueue(stack)                             |
        |  sortedInsert(stack, topElement)              |
        |                                                |
        --------------------------------------------------
        
               Initial Stack [3, 1, 4, 1, 5]
        --------------------------------------------------
        
                  sumUpQueue([3, 1, 4, 1, 5])
        --------------------------------------------------
        |                                                |
        |  topElement = 5                                |
        |                                                |
        --------------------------------------------------
        |                                                |
        |            sumUpQueue([3, 1, 4, 1])             |
        --------------------------------------------------
        
                        sumUpQueue([3, 1, 4, 1])
        --------------------------------------------------
        |                                                |
        |  topElement = 1                                |
        |                                                |
        --------------------------------------------------
        |                                                |
        |               sumUpQueue([3, 1, 4])             |
        --------------------------------------------------
        
                           sumUpQueue([3, 1, 4])
        --------------------------------------------------
        |                                                |
        |  topElement = 4                                |
        |                                                |
        --------------------------------------------------
        |                                                |
        |                  sumUpQueue([3, 1])             |
        --------------------------------------------------
        
                              sumUpQueue([3, 1])
        --------------------------------------------------
        |                                                |
        |  topElement = 1                                |
        |                                                |
        --------------------------------------------------
        |                                                |
        |                    sumUpQueue([3])              |
        --------------------------------------------------
        
                                sumUpQueue([3])
        --------------------------------------------------
        |                                                |
        |  topElement = 3                                |
        |                                                |
        --------------------------------------------------
        |                                                |
        |                    sumUpQueue([])               |
        --------------------------------------------------
        |                                                |
        |               Insert 3 into []                 |
        |                                                |
        --------------------------------------------------
        |                                                |
        |                     [3]                        |
        |                                                |
        --------------------------------------------------
        |                                                |
        |         Insert 1 into [3]                      |
        |                                                |
        --------------------------------------------------
        |                                                |
        |                   [1, 3]                       |
        |                                                |
        --------------------------------------------------
        |                                                |
        |              Insert 4 into [1, 3]              |
        |                                                |
        --------------------------------------------------
        |                                                |
        |             [1, 3, 4]                          |
        |                                                |
        --------------------------------------------------
        |                                                |
        |         Insert 1 into [1, 3, 4]                |
        |                                                |
        --------------------------------------------------
        |                                                |
        |       [1, 1, 3, 4]                             |
        |                                                |
        --------------------------------------------------
        |                                                |
        |         Insert 5 into [1, 1, 3, 4]             |
        |                                                |
        --------------------------------------------------
        |                                                |
        |     [1, 1, 3, 4, 5]                            |
        |                                                |
        --------------------------------------------------
        
                        Final Sorted Stack
        --------------------------------------------------
