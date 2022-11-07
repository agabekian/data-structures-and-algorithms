package datastructures.queue;

import datastructures.stack.Queue;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.function.Executable;

import java.util.NoSuchElementException;

import static org.junit.jupiter.api.Assertions.*;

public class QueueTest {
  @Test
  void testEnqueue() {
    Queue sut = new Queue();
    //add a first node , to the front since length is 0
    sut.enqueue("Last in line");
    assertTrue(sut.front.val == "Last in line" && sut.getLength() == 1);

    // add a second node, now wired to "back"
    sut.enqueue("or is it?");
    assertTrue(sut.back.val == "or is it?" && sut.getLength() == 2);
    System.out.println(sut.back.val);
  }

  @Test
  void testDequeue() {
    Queue sut = new Queue();
    sut.enqueue("First in q");
    sut.enqueue("Second in q");
    assertFalse(sut.front == null);


    assertTrue(sut.dequeve() == "First in q"); //dequeue the correct element
    assertTrue(sut.front != null && sut.getLength() == 1); //front IS null, len is 1
    sut.dequeve(); // empty now
    //Throw exception while attempt to dequeue on null
    assertThrows(NoSuchElementException.class, new Executable() {
        @Override
        public void execute() throws Throwable {
          sut.dequeve();
        }
      }
    );
  }

  @Test
  void testPeekAndPeekWhileNull() {
    Queue sut = new Queue();
    //confirm the initialized queue is empty;
    assertTrue(sut.isEmpty());

    sut.enqueue(11);
    assertTrue((int) sut.peek() == 11); //confirm peek is 11.

    sut.dequeve(); //now null
    assertTrue(sut.front == null && sut.getLength() == 0); //front IS null, len is 0
    //Throw exception while attempt to dequeue on null
    assertThrows(NoSuchElementException.class, new Executable() {
        @Override
        public void execute() throws Throwable {
          sut.peek();
        }
      }
    );
  }
}
