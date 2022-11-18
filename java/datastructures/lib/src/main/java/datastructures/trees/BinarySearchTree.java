package datastructures.trees;

import datastructures.trees.Node;

class BinarySearchTree<T extends Comparable<? super T>> extends BinaryTree {
  public void add(T value) {
    // Adds a new node with that value in the correct location in the binary search tree.
    Node<T> nodeToAdd = new Node<>(value);
    if (root == null)
      root = nodeToAdd;
    else {
      Node<T> current = root;
      while (current != null) {
        if (nodeToAdd.val.compareTo(current.val) == 0) // nodeToAdd == curr?
          throw new IllegalArgumentException();
        if (nodeToAdd.val.compareTo(current.val) < 0) { //node.val less current
          if (current.left == null) {
            current.left = nodeToAdd;
            return;
          }
          current = current.left;
        } else {
          if (current.right == null) {
            current.right = nodeToAdd;
            return;
          }
          current = current.right;
        }
      }
    }
  }

  public boolean contains(T value) {
    Node<T> current = root;
    while (current != null) {
      if (current.val.compareTo(value) == 0)
        return true;
      else if (current.val.compareTo(value) > 0) // if current > value
        current = current.left;
      else
        current = current.right;
    }
    return false;
  }

  class Main {
    public void main(String[] args) { //JB quick test in main
//      BinarySearchTree tree = new BinarySearchTree();
//      tree.add(10);
//      tree.add(5);
//      tree.add(15);
//      tree.add(7);
//
//
//      System.out.println(tree.root.val);
//      System.out.println(tree.root.left.val);
//      System.out.println(tree.root.right.val);
//      System.out.println(tree.root.left.right.val);
//      System.out.println(tree.contains(7)); //checks true
    }
  }
}
