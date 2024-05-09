#### Challenge Title

##### k-th value from the end of a linked list.

Specifications

Branch Name: linked-list-kth

Challenge Type: Extending an Implementation

Feature Tasks
Write the following method for the Linked List class:

kth from end
argument: a number, k, as a parameter.
Return the node’s value that is k places from the tail of the linked list.
You have access to the Node class and all the properties on the Linked List class as well as the methods created in previous challenges.
### Pseudocode

function kthFromEnd(k)  
if head is null or k is negative ->  null
let p1 = head  
for i = 0 to k  
if p1 is not null  
p1 = p1.next  
else  
return null // k is >  length of the list    
let p2 = head  
while p1 is not null  
p1 = p1.next  
p2 = p2.next  

return p2.value


### [Code (javascript)](linked-lists-kth.js)