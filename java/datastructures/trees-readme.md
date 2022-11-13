# Trees

## Challenge

Implement a Node class and a Binary Tree class. Extend the Binary Tree class with a Binary Search Tree class.

### Requirements

- Construct Node class with a value, and left and right child nodes
- Create methods for traversing the binary tree:
  - Pre order.
  - In order.
  - Post order.
- Extend the Binary Tree class with a Binary Search Tree and include and method for adding values and a method for seeing if a value is contained.

### Tests

1. Can successfully instantiate an empty tree
2. Can successfully instantiate a tree with a single root node
3. For a Binary Search Tree, can successfully add a left child and right child properly to a node
4. Can successfully return a collection from a preorder traversal
5. Can successfully return a collection from an inorder traversal
6. Can successfully return a collection from a postorder traversal
7. Returns true 	false for the contains method, given an existing or non-existing node value

## Approach & Efficiency

For traversal in Binary Trees is O(N) each node.
The space complexity  is O(N)
## API

### Binary Tree

**public T[] preOrder()** Returns an array pre-order.

**public T[] inOrder()** Returns an array in-order.

**public T[] postOrder()** Returns an array post-order.



### Binary Search Tree

**public void add(T value)** Adds a node with value to the tree.

**public boolean contains(T value)** Returns true if the tree contains the given value.
