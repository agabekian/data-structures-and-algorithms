#### Write the following method for the Binary Tree class   
#### _find maximum value_

Arguments: none / Returns: number

Find the maximum value stored in the tree. You can assume that the values stored in the Binary Tree will be numeric.
#### Whiteboard
                        m: -∞ 
                          1 
                       (m:1)
                      /          \
                   3(m:3)        7 (m:8)
                  /    \        /   \
                8 (m:8) 5     11(m:11) 7(m:11)  --> return 11
               / \     (m:8) 
            -33    2
          (m:8)    (m:8)




We start with the max value initialized to neg infinity.
Track the max value encountered so far during traversal, enclosed in parentheses.


We move from left to right, updating the maximum value as we traverse.


Once the traversal is complete, the final max value found in the entire tree is 20.

#### BigO
Time: O(N) iterate once

#### Solution
[BinaryTree class with the method 'bfs'](..%2F..%2Ftree%2FBinaryTree.js)    
[bfs method tests](..%2F..%2Ftree%2F__tests__%2Fbfs%20test.js)  

- [x] cc17