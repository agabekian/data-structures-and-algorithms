package datastructures.pseudoqueue;

import datastructures.stack.Stack;

public class PseudoQueue<T> {
  public Stack<T> stack1;
  public Stack<T> stack2;

  public PseudoQueue() {
    stack1 = new Stack<>();
    stack2 = new Stack<>();
  }

  public void enqueue(T vals) {
    stack1.push(vals);
  }

  public T dequeue() {
    if (stack2.isEmpty()) {
      while (!stack1.isEmpty()) {
        stack2.push(stack1.pop());
      }
    }
    return stack2.pop();//now mirrored
  }

}
