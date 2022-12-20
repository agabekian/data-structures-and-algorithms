package codechallenges;

import java.util.HashSet;
import java.util.Set;

public class HashMapChallenges {
  public static String firstRepeatedWord(String str) {
    Set<String> map = new HashSet<>();
    String word = "";
    for (int i = 0; i < str.length(); i++) {
      char c = Character.toLowerCase(str.charAt(i));
      if ((c >= 'a' && c <= 'z') || c == '\'') // apostrophe
        word = word + c;
      else if (c == ' ' || i == str.length() - 1) {
        if (map.contains(word)){
          return word;
        }
        map.add(word);
        word = ""; // reset word
      }
    }
    return "";
  }
}
