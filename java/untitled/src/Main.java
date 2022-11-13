import java.util.HashMap;

public class Main {
  public static int[] twoSum(int[] arr, int target) {
    HashMap<Integer, Integer> hash = new HashMap<>();
    for (int i = 0; i < arr.length; i++) {
      int compliment = target - arr[i];
      if (hash.containsKey(compliment)) {
        int[] res = {hash.get(compliment), i};
        return res;
      }
      hash.put(arr[i], i);
    }
    return null;
  }


  public static void main(String[] args) {
    int[] arr = {2, 3, 4, 5, 6, 7};
    twoSum(arr, 9);
  }
}
