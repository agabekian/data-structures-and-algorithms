package datastructures.linkedlist;

import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.assertTrue;

public class LinkedListTest {
  @Test
  void testInsertAsHead() {
    LinkedList sut = new LinkedList();
    sut.insert(11);
    sut.insert(13);
    int head = (int) sut.head.val;
    System.out.println(head);
    assertTrue(head == 13);
  }

  @Test
  void testSllIncludesVal() {
    LinkedList sut = new LinkedList();
    sut.insert(11);
    sut.insert(13);
    sut.insert("Papa");
    assert (sut.includes("Mama") == false);
    assert (sut.includes("Papa") == true);
    assert (sut.includes(11) && !sut.includes(7));
  }

  @Test
  void testSllAsString() {
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

  @Test
  void append() {
    LinkedList sut = new LinkedList();
    sut.insert(11);
    sut.insert(13);
    sut.append(1999);
    String logo = sut.toString();
    System.out.println(logo);
    assertTrue(logo.contains("{ 1999 } -> NULL"));
  }

  @Test
  void testInsertBefore() {
    LinkedList sut = new LinkedList();
    sut.insert(3);
    sut.insert(2);
    sut.insert(1);
    sut.insertBefore(2, 101);
    String logo = sut.toString();
    System.out.println(logo);
    assertTrue(logo.contains("{ 1 } -> { 101 } -> { 2 }"));
  }

  @Test
  void testInsertAfter(){
    LinkedList sut = new LinkedList();
    sut.insert(3);
    sut.insert(2);
    sut.insert(1);
    sut.insertAfter(2,"after2");
    String logo = sut.toString();
    System.out.println(logo);
    assertTrue(logo.contains("{ 1 } -> { 101 } -> { 2 }"));
  }
}
