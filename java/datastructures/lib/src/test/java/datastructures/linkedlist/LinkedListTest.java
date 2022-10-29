package datastructures.linkedlist;

import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.assertTrue;

public class LinkedListTest
{
  @Test void testInsertAsHead()
    {
      LinkedList sut = new LinkedList();
      sut.insert(11);
      sut.insert(13);
      int head = (int) sut.head.val;
      System.out.println(head);
      assertTrue(head==13);
    }

  @Test void testSllAsString()
  {
    LinkedList sut = new LinkedList();
    sut.insert(11);
    sut.insert(13);
    String test = sut.toString();
    System.out.println(test);
    assertTrue(test.equals(
      "{ 13 } -> { 11 } -> NULL"
      )
    );
  }
}
