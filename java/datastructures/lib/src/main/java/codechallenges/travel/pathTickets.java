package codechallenges.travel;


import java.util.*;


public class pathTickets {

  public static String[] solution(ArrayList<Ticket> tickets) {
    ArrayList<String> list = new ArrayList<>();
    String start = "";
    String end = "";
    HashMap<String, Integer> map = new HashMap<>();
    for (Ticket t : tickets) {
      String arrCity = t.arrive;
      String depCity = t.depart;
      map.put(arrCity, 0);
      map.put(depCity, 0);
    }
    for (Ticket t : tickets) {
      String arrCity = t.arrive;
      String depCity = t.depart;
      if (map.containsKey(arrCity)) map.put(arrCity, map.get(arrCity) + 1);
      if (map.containsKey(depCity)) map.put(depCity, map.get(depCity) - 1);
      //check if -1 = departure city, +1 = arrival city
      if (map.get(arrCity) > 0) {
        end = arrCity;
      }
      if (map.get(depCity) < 0) {
        start = depCity;
      }
    }
    String[] res = {start, end};
    System.out.println(start + " " + end);
    return res;
  }
}
