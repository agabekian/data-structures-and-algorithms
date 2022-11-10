package datastructures.queue;

import datastructures.linkedlist.Node;

import java.util.NoSuchElementException;

public class Queue<T> {
  public Node<T> front = null;
  public Node<T> back = null;

  public int getLength() {
    return length;
  }

  private int length = 0;

  public void enqueue(T val) {
    Node<T> newQNode = new Node<>(val);
    if (length == 0) {
      front = newQNode;
    } else {
      back.next = newQNode;
    }
    back = newQNode;
    length += 1;
  }

  public T dequeve() throws NoSuchElementException {
    if (front == null) {
      throw new NoSuchElementException("The queue is empty");
    }
    T fValue = front.val;
    front = front.next;
    length--;
    return fValue;
  }

  public T peek() throws NoSuchElementException {
    if (front == null) {
      throw new NoSuchElementException("The queue is empty");
    }
    return front.val;
  }

  public boolean isEmpty() {
    return front == null;
  }
}
