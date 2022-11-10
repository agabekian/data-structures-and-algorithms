package datastructures.brackets;

import java.util.HashMap;
import java.util.Stack;

public class IsValidParens {
  public boolean isValidBrackets(String s) {
    if (s.length() < 2) return false;
    HashMap<Character, Character> map = new HashMap<>();
    map.put('{', '}');
    map.put('(', ')');
    map.put('[', ']');
    Stack stack = new Stack();
    char[] chars = s.toCharArray();
    for (int i = 0; i < chars.length; i++) {
      char cur = chars[i];
      if (map.containsKey(cur)) {
        stack.push(map.get(cur));
      } else {
        if (stack.size()==0 || !stack.pop().equals(cur) ) {
          return false;
        }
      }
    }
    return stack.size() == 0;
  }
}
