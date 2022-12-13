```Linked Lists```\
Problem Domain\
Zip two linked lists alternating between the nodes.

i/o: pair of linked lists / mutated list A


static LinkedList zip(LinkedList A, LinkedList B) {
if (A.head != null && B.head != null) {
Node a = A.head;
Node b = B.head;


Algo:
1. Stash item 2 (1.next) from listA as temp node.
2. Reassign ListA current node's next to ListB.
3. Swap a and b lists.
   4.
         while (b != null) {
           Node temp = a.next;     //stash item 2 from listA as temp node
               a.next = b;         //make item 1 on listB the new item 2 on listA
               a = b;             // swap 1 make what was the listB item 1 the new listA.
               b = temp;           // swap 2 make the stashed item 2 of A (now orphaned) the swapped list B
         }
         return A;
       }
       return null;
   }
   }
