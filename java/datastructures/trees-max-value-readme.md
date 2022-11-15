Binary Trees - Max Value
Write a method extending Binary Trees that returns the maximum value in a binary tree.
I/O input: Binary Tree
   output: int

Taverse recursively over Binary Tree (depth first) keeping track of highest value (max)
Once recursion is completed, return max.


Whiteboard:

![](lib/src/test/java/datastructures/trees/max.png)

Time Complexity: O(N) for N nodes in the tree.
Using recursion every node of the tree is visited
Space Complexity: O(N)
For every node visited stack space required.
