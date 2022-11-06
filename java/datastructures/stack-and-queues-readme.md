Stacks and Queues
Challenge
Using a Linked List as the underlying data storage mechanism, implement both a Stack and a Queue.


Construct Node classes to be used as underlying structures for the Stack class and the Queue class.
Create methods for stack and queue to add and remove elements.
Create a method to return the top of the stack or the front of the queue without returning it.
Create a method to determine if the stack/queue is empty.
Tests
Can successfully push onto a stack
Can successfully push multiple values onto a stack
Can successfully pop off the stack
Can successfully empty a stack after multiple pops
Can successfully peek the next item on the stack
Can successfully instantiate an empty stack
Calling pop or peek on empty stack raises exception
Can successfully enqueue into a queue
Can successfully enqueue multiple values into a queue
Can successfully dequeue out of a queue the expected value
Can successfully peek into a queue, seeing the expected value
Can successfully empty a queue after multiple dequeues
Can successfully instantiate an empty queue
Calling dequeue or peek on empty queue raises exception
Approach & Efficiency
Because there is no traversal involved working with a stack or a queue all the
method's time complexities are linear O(1).


#### Stack

public void push(T value) Adds a new element to the top of the stack.

public T pop() Returns the top's value and removes element from the stack.

public T peek() Returns the value of the top.

public boolean isEmpty() Check if the stack is empty.


#### Queue

public void enqueu(T value) Adds a new element to the back of the queue.

public T dequeue Returns the top element's value and removes it from the queue.

public T peek() Returns the top element's value on the queue but does not remove it form the queue.

public boolean isEmpty() Check if the stack is empty.

public int getLength() Returns the length of the queue.
