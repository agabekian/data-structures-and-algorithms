package codechallenges;

import datastructures.hashmap.HashMap;
import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.*;

import static org.junit.jupiter.api.Assertions.assertEquals;

public class TestHashMap {
  @Test
  void testStrings() {
    HashMap<String, String> sut = new HashMap(3);
    sut.set("String1", "Lalala");
    sut.set("String2", "MoreSinging");
    sut.set("String3", "EvenMoreSinging");
    sut.set("String4", "Oh shut up already!"); //arrayList expands above 3 fine
    System.out.println(sut.contains("String1"));

    assertTrue(sut.contains("String1"));
    assertEquals(sut.get("String2"), "MoreSinging");
    assertTrue(sut.get("String4") == "Oh shut up already!");
    assertFalse(sut.contains("String0"));
    System.out.println(sut.get("String1"));
  }

  @Test
  void testInt() {
    HashMap<Integer, String> sut = new HashMap(3);
    sut.set(11, "Yo baby!");
    sut.set(2, "Snake eyes!");
//    System.out.println("******" + sut.get(11));
    assertTrue(sut.contains(11) && sut.get(11).equals("Yo baby!"));
  }

  @Test
  void testNull() {
    HashMap<String, String> sut = new HashMap(3);
    assertNull(sut.get("test"));
  }

  @Test
  void testKeys() {
    HashMap<String, String> sut = new HashMap(3);
    sut.set("String1", "Lalala");
    sut.set("String2", "MoreSinging");
    sut.set("String3", "EvenMoreSinging");
    sut.set("String4", "Oh shut up already!"); //arrayList expands above 3 fine
    assertTrue(sut.keys().size() == 4);
    for (String k : sut.keys()) {
      System.out.println(k); //confirming no order in hashmap whatsoever
      assertTrue(k.contains("String"));
    }
  }
}
