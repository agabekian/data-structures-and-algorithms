package codechallenges.travel;

public class Ticket {
  public String depart;
  public String arrive;

  public Ticket(String origin, String dest) {
    this.depart = origin;
    this.arrive = dest;
  }

  public Ticket() {
  }
}
