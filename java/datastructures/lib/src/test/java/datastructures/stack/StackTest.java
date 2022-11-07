package datastructures.stack;

import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.function.Executable;

import java.util.NoSuchElementException;

import static org.junit.jupiter.api.Assertions.*;


public class StackTest {

  @Test
  void testStackInsert() {
    Stack sut = new Stack();
    sut.push(11);
    System.out.println("top" + sut.top.toString());
    // push one element
    assertTrue((int) sut.top.val == 11);
    //push multiple
    sut.push("pop me");
    assertTrue((String) sut.top.val == "pop me");
    //pop() returns the last added node
    assertTrue(sut.pop() == "pop me");
    //empty remaining nodes from stack with pop()
    sut.pop();
    //assert that the stack is empty i.e. "top" is null
    assertNull(sut.top);
  }

  @Test
  void testPeek() {
    Stack sut = new Stack();
    sut.push("crazy");
    assertTrue(sut.peek() == "crazy");

  }

  @Test
  void testThrowExceptionOnPopEmptyStack() {
    //6. can instantiate empty stack
    Stack emptyStack = new Stack();
    assertNull(emptyStack.top);
    //7. Calling pop or pee on empty stack raises exception
    assertThrows(NoSuchElementException.class, new Executable() {
        @Override
        public void execute() throws Throwable {
          emptyStack.pop();
        }
      }
    );
  }


  @Test
  void testThrowExceptionOnPeekEmptyStack() {
    //6. can instantiate empty stack
    Stack emptyStack = new Stack();
    assertNull(emptyStack.top);
    //7. Calling pop or pee on empty stack raises exception
    assertThrows(NoSuchElementException.class, new Executable() {
        @Override
        public void execute() throws Throwable {
          emptyStack.peek();
        }
      }
    );
  }

  @Test
  void testIsEmpty() {
    Stack emptyStack = new Stack();
    assertTrue(emptyStack.isEmpty());

    Stack notEmptyStack = new Stack();
    notEmptyStack.push(1999999);
    assertFalse(notEmptyStack.isEmpty());
  }

}
