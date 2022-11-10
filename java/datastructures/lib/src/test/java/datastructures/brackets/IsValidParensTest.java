package datastructures.brackets;
import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.*;

public class IsValidParensTest {

  @Test
  void testIsValidParens() {
    IsValidParens sut = new IsValidParens();

    boolean res1 = sut.isValidBrackets("()");
    boolean res2 = sut.isValidBrackets("{{");
    boolean res3 = sut.isValidBrackets("]");
    boolean res4 = sut.isValidBrackets(")(){}");
    boolean res5 = sut.isValidBrackets("({[]})");
    assertTrue(res1);
    assertFalse(res2);
    assertFalse(res3);
    assertFalse(res4);
    assertTrue(res5);
  }
}
//
