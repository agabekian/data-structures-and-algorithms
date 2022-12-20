package datastructures.hashmap;

import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.assertEquals;

public class testHashMap {

  @Test
  void constructor() {
    HashMap<Integer, Integer> sut = new HashMap<Integer, Integer>();
    assertEquals(sut.size(), 10);
  }

  @Test
  void set_single() {
    HashMap<Integer, Integer> sut = new HashMap<Integer, Integer>();
    sut.set(199, 60);
    sut.set(199, 80);
    assertEquals(sut.get(199), 80);
  }

  @Test
  void set_multiple() {
    HashMap<Integer, Integer> sut = new HashMap<>();
    sut.set(111, 50);
    sut.set(25, -1);
    sut.set(40, 200);
    assertEquals(sut.get(111), 50);
    assertEquals(sut.get(25), -1);
    assertEquals(sut.get(40), 200);
  }
}
