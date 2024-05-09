#### Challenge Title
Write a function called zip lists

Arguments: 2 linked lists

Return: New Linked List, zipped as noted below

Zip the two linked lists together into one so that the nodes alternate between the two lists and return a reference to the the zipped list.

Keep additional space down to O(1)

You have access to the Node class and all the properties on the Linked List class as well as the methods created in previous challenges.

##### Example
zipLists (list1, list2)  
Arg list1                  | Arg list2                     | Output 

{1} -> {3} -> {2} -> null **|** {5} -> {9} -> {4} -> null **|** {1} -> {5} -> {3} -> {9} -> {2} -> {4} -> null  

{1} -> {3} -> null **|** {5} -> {9} -> {4} -> null **|** {1} -> {5} -> {3} -> {9} -> {4} -> null   

{1} -> {3} -> {2} -> null	{5} -> {9} -> null	{1} -> {5} -> {3} -> {9} -> {2} -> null  


[//]: # (Stretch Goal)

[//]: # (Once you’ve achieved a working solution, implement another function that merges two sorted linked lists into a single sorted linked list.)

[//]: # (Check off the actual steps that you completed.)

[//]: # (- [ ] Top-level README “Table of Contents” is updated)

[//]: # (- [ ] README for this challenge is complete)

[//]: # (  - [ ] Summary, Description, Approach & Efficiency, Solution)

[//]: # (  - [ ] Picture of whiteboard)

[//]: # (  - [ ] Link to code)

[//]: # (- [ ] Feature tasks for this challenge are completed)

[//]: # (- [ ] Unit tests written and passing)

[//]: # (  - [ ] “Happy Path” - Expected outcome)

[//]: # (  - [ ] Expected failure)

[//]: # (  - [ ] Edge Case &#40;if applicable/obvious&#41;)

[//]: # (  )
[//]: # (  - Submit your completed work:)

[//]: # (  Copy the link to your open pull request and paste it into the assignment submission field.)

[//]: # (  Leave a description of how long this assignment took you in the comments box.)

[//]: # (  Add any additional comments to your grader about your process or any difficulties you may have had with the assignment.)

[//]: # (  Merge your branch into main, and delete your branch &#40;don’t worry, the PR link will still work&#41;.)

### Pseudocode 

Function zip_lists(list1, list2):

If either list1 or list2 is empty: return the non-empty list

_Initialize pointers:_
>cur1 = head of list1  
cur2 = head of list2

_While both current1 and current2 are not None:_

Save "next" pointers:  
> next1 = next node of cur1  
next2 = next node of current2

Point current **1**'s next to current **2**:

>cur1.next =  cur2

If next1 is **not** None:

Move: 
>cur1 to next1  
cur2 to next2

_If next1 is None:_  _Break the loop_

_Point_:
> cur2's next = next1:

_Advance_:   
>cur1 to next1  
cur2 to next2

Return list1
![zip.png](zip.png)

##COde

export function zipLists(list1, list2) {
if (!list1 && !list2) return null;
if (!list1 || !list2) {
return list1 || list2;
}
let cur1 = list1.head,
cur2 = list2.head; //2 pointers to lists

    while (cur1 && cur2) {
        let next1 = cur1.next, //store lists ".nexts" 8 & 808
            next2 = cur2.next; //
        // console.log("pointers", next1.val,next2.val)
        cur1.next = cur2; //zip to list2   11->
                                            // 101->808->909
        // console.log("cur1=head", cur1, "now point to list2 ",cur1.next)
        if (next1) { // is next stored null ?
            cur2.next = next1; // 101 --> 8
            cur1 = next1; //advance cur1 to next1: 101 >> 8
            cur2 = next2; //advance cur2 to next2  808 >> 909
            console.log("CUR2 is now next", cur2)
        } else break;
    }
    return list1;
}

//for tests

let node1 = new Node(11);
let node2 = new Node(8);

let node3 = new Node(101);
let node4 = new Node(808);
let node5 = new Node(909);
node1.next = node2;
node3.next = node4;
node4.next = node5;

let l1 = new LinkedList();
let l2 = new LinkedList();
l1.insert(node1);
l2.insert(node3);



const mergedList = zip(l1, l2); //expect 11,101,8,808,13,null

let currentNode = mergedList.head;
while (currentNode) {
console.log(currentNode.val);
currentNode = currentNode.next;
}