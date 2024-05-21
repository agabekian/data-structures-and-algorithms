#### Write the following method for the Binary Tree class   
#### _find maximum value_

Arguments: none / Returns: number

Find the maximum value stored in the tree. You can assume that the values stored in the Binary Tree will be numeric.
#### Whiteboard
                       1 (m: -∞)

                     /            \
                 8 (m:8)         11 (new max: 11)
               /     \            /  \
           4 (m:8)   5(m:8)   5(m:11) 7(m:11) |--> return 11
         /   \   
    -14(m:8) -13(m:8)




We start with the max value initialized to neg infinity.
Track the max value encountered so far during traversal, enclosed in parentheses.


We move from left to right, updating the maximum value as we traverse.


Once the traversal is complete, the final max value found in the entire tree is 20.

#### BigO
Time: O(N) iterate once

#### Solution
[BinaryTree class with the method 'treeMax'](..%2F..%2Ftree%2FBinaryTree.js)  
[treeMax method tests](..%2F..%2Ftree%2F__tests__%2FtreeMax%20tests.js)

[//]: # (cc16)