package datastructures.trees;

class Node<T> {

  T val;
  Node<T> left = null;
  Node<T> right = null;

  Node() {
    //empty
  }

  Node(T val) {
    this.val = val;
  }

}
