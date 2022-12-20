package datastructures.linkedlist;

import linkedlist.LinkedList;
import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.assertTrue;

import static org.junit.jupiter.api.Assertions.assertEquals;


public class ZipListsTest {
  @Test
  void testZip() {
    LinkedList sut1 = new LinkedList();
    sut1.insert(11);
    sut1.append("skip me");
    sut1.append("imma middle");
    sut1.append(13);

    LinkedList sut2 = new LinkedList();
//    sut2.insert(888);
//    sut2.append(999);
//    sut2.append(666);
//    sut2.append("dude");

    LinkedList result = new LinkedList<>();
    result = sut1.zip(sut1, sut2);
    System.out.println("Resulting list as string : " + result);
    String comp = "{ 11 } -> { 888 } -> { skip me } -> { 999 } -> { imma middle } -> { 666 } -> { 13 } -> { dude } -> NULL";
    assertEquals(result.toString(), comp);
  }
}


