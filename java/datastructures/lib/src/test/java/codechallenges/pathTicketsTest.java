package codechallenges;

import codechallenges.travel.Ticket;
import codechallenges.travel.pathTickets;
import org.junit.jupiter.api.Test;

import java.lang.reflect.Array;
import java.util.ArrayList;
import java.util.List;

import static org.junit.jupiter.api.Assertions.*;

import static org.junit.jupiter.api.Assertions.assertEquals;

public class pathTicketsTest {
  @Test
  public void test_solution() {
    Ticket one = new Ticket("SEA", "SFO");
    Ticket two = new Ticket("SFO", "LAX");
    Ticket three = new Ticket("LAX", "CUN");
    ArrayList<Ticket> tickets = new ArrayList<>(3);
    tickets.add(one);
    tickets.add(two);
    tickets.add(three);

   String[] iteary = pathTickets.solution(tickets);
   String[] expect = {"SEA","CUN"};
   assertArrayEquals(iteary,expect);
  }


}
