package codechallenges;

import org.junit.jupiter.api.Test;

import java.util.ArrayList;
import java.util.Collections;
import java.util.HashMap;

import static org.junit.jupiter.api.Assertions.assertEquals;

public class HashMapJoinTest {


  @Test
  void white_board_example_right_join() {

    HashMap<String, String> left = new HashMap<>();
    HashMap<String, String> right = new HashMap<>();

    left.put("dope", "D");
    left.put("grandma", "G");
    left.put("armen", "A");
    left.put("house", "H");
    right.put("dope", "d");
    right.put("armen", "a");
    right.put("house", "h");

    assertEquals(HashMapChallenges.leftJoinHashMap(left, right).toString(), "[[grandma, G, null], [armen, A, a], [house, H, h], [dope, D, d]]");
  }


}
