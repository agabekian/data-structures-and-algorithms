package codechallenges;

import java.util.ArrayList;
import java.util.HashMap;
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
        if (map.contains(word)) {
          return word;
        }
        map.add(word);
        word = ""; // reset word
      }
    }
    return "";
  }


  public static ArrayList<ArrayList<String>> leftJoinHashMap(HashMap<String, String> left, HashMap<String, String> right) {
    ArrayList<ArrayList<String>> joined = new ArrayList<>();
    for (String key : left.keySet()) {
      ArrayList<String> line = new ArrayList<>(); // build a table entry
      line.add(key);
      line.add(left.get(key));
      joined.add(line);
    }

    for (ArrayList<String> line : joined) {
      String key = line.get(0);
      if (right.containsKey(key))
        line.add(right.get(key));
      else
        line.add(null);
    }
    return joined;
  }
}
