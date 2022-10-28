package datastructures.linkedlist;

public class Node<T> {
  public T val;
  public Node<T> next = null;

  public Node(T val) //constructor
  {
    this.val = val;
  }

  public Node() {
  }
}
