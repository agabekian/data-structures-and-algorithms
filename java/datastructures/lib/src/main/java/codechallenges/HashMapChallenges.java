package codechallenges;

import java.util.*;

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


  public static boolean autoBio(String num) {
    for (int i = 0; i < num.length(); i++) {
      int count = 0;
      for (int j = 0; j < num.length(); j++) {
        int curDigit = Integer.valueOf(String.valueOf(num.charAt(j)));
        System.out.println(curDigit + " inside " + i);
        if (curDigit == i) {
          System.out.println("match");
          count++;
        }
        System.out.println("i= " + i + " " + num.charAt(j) + " " + count);
      }
      if (count != Integer.valueOf(String.valueOf(num.charAt(i)))) return false;
    }
    return true;
  }

  public static boolean autoBioHash(String num) {
    String res = "";
    HashMap<Integer, Integer> map = new HashMap<>();
//    map.put(0,1);
    for (int i = 0; i < num.length(); i++) {
      map.put(i, 0);
    }
    for (int j = 0; j < num.length(); j++) {
      Integer cur = Integer.valueOf(String.valueOf(num.charAt(j)));
      System.out.println("cur char " + num.charAt(j) + " " + map.get(cur));
      if (map.containsKey(cur)) {
        System.out.println("yea ");
        map.put(Integer.valueOf(String.valueOf(cur)), map.get(cur) + 1);
      }
    }

    for (Map.Entry<Integer, Integer> entry : map.entrySet()) {
      res += entry.getValue();
    }
    System.out.println("result " + res.getClass() + " " + num.getClass() + String.valueOf(res == num));
    if (res.equals(num)) {
      return true;
    } else {
      return false;
    }
  }

  public static boolean autoBioOpt(String num) { //optimized O(3N), ie O(N)
    String res = "";
    HashMap<Integer, Integer> fMap = new HashMap<>();
    int n = num.length();
    for (int i = 0; i < n; i++) fMap.put(i, 0); //store indexes into fMap with default val 0.

//second pass scan number for presence of digits  equal to index and update their frequency into fMapgit
    for (int j = 0; j < n; j++) {
      Integer cur = Integer.valueOf(String.valueOf(num.charAt(j)));
      if (fMap.containsKey(cur)) {
        fMap.put(Integer.valueOf(String.valueOf(cur)), fMap.get(cur) + 1);
      }
    }
//finally 3rd pass over fMap values  to build a string from frequency values to compare with the input string
    for (Map.Entry<Integer, Integer> entry : fMap.entrySet()) {
      res += entry.getValue();
    }
//    System.out.println("result " + res.getClass() + " " + num.getClass() + String.valueOf(res == num));
    return res.equals(num) ? true : false;
  }
}
