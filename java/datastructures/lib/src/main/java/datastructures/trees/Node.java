package datastructures.trees;

public class Node <T> {
  public T val;
  public Node<T> left = null;
  public Node<T> right = null;

  Node() {}

  public Node(T val) {
    this.val = val;
  }

}
