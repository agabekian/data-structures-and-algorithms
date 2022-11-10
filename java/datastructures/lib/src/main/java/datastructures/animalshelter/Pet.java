package datastructures.animalshelter;
public class Pet {
  private final String type;
  private final String name;
  public Pet(String type, String name) {
    this.type = type;
    this.name = name;
  }

  public String getType() {
    return type;
  }

  public String getName() {
    return name;
  }
}

