package datastructures.stack;

import datastructures.linkedlist.Node;

import java.util.NoSuchElementException;


public class Stack<T> {
  public Node<T> top = null;

  @Override
  public String toString() {
    return super.toString();
  }

  public void push(T val) {
    Node<T> newTop = new Node<>(val);
    newTop.next = top;
    top = newTop;
  }

  public T pop() throws NoSuchElementException {
    if(top == null){
      throw new NoSuchElementException("Is null, Stack is empty");
    }
    T res = top.val;
    top = top.next;
    return res;
  }

  public T peek() throws NoSuchElementException {
    if(top == null){
      throw new NoSuchElementException("Is null, Stack is empty");
    }
    return top.val;
  }
}
