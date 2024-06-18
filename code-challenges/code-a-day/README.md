### Sort stack (recursively)
[sortStack.js](sortStack.js)

[sortStack.test.js](sortStack.test.js)

##### Process

###### 1. Base Case Check: 

If the stack is empty, the algorithm returns, as there is nothing to sort.

###### 2. Recursive Sorting:

The algorithm recursively sorts the stack by popping elements one by one until the stack becomes empty.
At each recursive call, the top element is popped from the stack.
The remaining stack is recursively sorted.
###### 3. Sorted Insertion:

After the stack is sorted recursively, each popped element is inserted back into the stack in sorted order.
The sortedInsert function is used for this purpose.
This function inserts the element back into the stack while maintaining its sorted order.
###### 4. Repeat Until Completion:

Steps 2 and 3 are repeated until all elements are sorted and reinserted back into the stack.

###### 5. Final Stack:

Once the recursive calls are completed and all elements are reinserted into the stack in sorted order, the stack becomes sorted.

##### Pseudocode 

    function sortStack(stack):
    if stack is empty:
    return
    topElement = stack.pop()
    sortStack(stack)
    sortedInsert(stack, topElement)
    
    function sortedInsert(stack, element):
    if stack is empty or stack.peek() <= element:
    stack.push(element)
    else:
    topElement = stack.pop()
    sortedInsert(stack, element)
    stack.push(topElement)

Let's analyze the time complexity (Big O) of the `sortStack` algorithm.

### Time Complexity Analysis

The `sortStack` algorithm utilizes recursion to sort the stack. Here's the breakdown of the time complexity:

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

Therefore, the overall time complexity of the `sortStack` algorithm is \( O(n^2) \), where \( n \) is the number of elements in the stack.

### Space Complexity

The space complexity of the `sortStack` algorithm is \( O(n) \) due to the recursive calls on the stack, where \( n \) is the number of elements in the stack. Each recursive call consumes memory on the call stack. Additionally, the auxiliary space required for sorting operations is negligible compared to the input size, so it can be considered constant, resulting in an overall space complexity of \( O(n) \).

####  Whiteboard
    --------------------------------------------------
        |                                                |
        |                sortStack(stack)                |
        |                                                |
        --------------------------------------------------
        |                                                |
        |  if stack is empty:                           |
        |      return                                    |
        |                                                |
        |  topElement = stack.pop()                      |
        |  sortStack(stack)                             |
        |  sortedInsert(stack, topElement)              |
        |                                                |
        --------------------------------------------------
        
               Initial Stack [3, 1, 4, 1, 5]
        --------------------------------------------------
        
                  sortStack([3, 1, 4, 1, 5])
        --------------------------------------------------
        |                                                |
        |  topElement = 5                                |
        |                                                |
        --------------------------------------------------
        |                                                |
        |            sortStack([3, 1, 4, 1])             |
        --------------------------------------------------
        
                        sortStack([3, 1, 4, 1])
        --------------------------------------------------
        |                                                |
        |  topElement = 1                                |
        |                                                |
        --------------------------------------------------
        |                                                |
        |               sortStack([3, 1, 4])             |
        --------------------------------------------------
        
                           sortStack([3, 1, 4])
        --------------------------------------------------
        |                                                |
        |  topElement = 4                                |
        |                                                |
        --------------------------------------------------
        |                                                |
        |                  sortStack([3, 1])             |
        --------------------------------------------------
        
                              sortStack([3, 1])
        --------------------------------------------------
        |                                                |
        |  topElement = 1                                |
        |                                                |
        --------------------------------------------------
        |                                                |
        |                    sortStack([3])              |
        --------------------------------------------------
        
                                sortStack([3])
        --------------------------------------------------
        |                                                |
        |  topElement = 3                                |
        |                                                |
        --------------------------------------------------
        |                                                |
        |                    sortStack([])               |
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
