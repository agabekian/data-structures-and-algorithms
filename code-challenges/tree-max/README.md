#### Write the following method for the Binary Tree class   
#### _find maximum value_

Arguments: none / Returns: number

Find the maximum value stored in the tree. You can assume that the values stored in the Binary Tree will be numeric.

              15
            /     \
           7      20 (Max: 20)
         /  \    / \
       -8   12  18  -5
      /    / \
    -4    9   13 (Max: 15)
               /
            -17    (Max: 15)
                        \
                     -16 (Max: 15)

We start with the max value initialized to neg infinity.
The tracking information, indicating the max value encountered so far during traversal, is enclosed in parentheses.


We move from left to right, updating the maximum value as we traverse.


Once the traversal is complete, the final maximum value found in the entire tree is noted to the right of the root node, which is 15.

#### BigO
Time: O(N) iterate once

#### Solution
[BinaryTree class with the method 'treeMax'](..%2F..%2Ftree%2FBinaryTree.js)  
[treeMax method tests](..%2F..%2Ftree%2F__tests__%2FtreeMax%20tests.js)

[//]: # (cc16)