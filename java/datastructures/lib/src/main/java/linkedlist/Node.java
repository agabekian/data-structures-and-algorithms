package linkedlist;

public class Node<T> {
  public T val;
  public Node<T> next; //to "point" is to have variable of the correct type, in this case is Node<T>.

  //Don't be surprised that head.val is not "int" but an _Object_ (T) that _contains_ int (or String, or whatever)
 // T vs Object : https://stackoverflow.com/questions/5207115/java-generics-t-vs-object
  public Node(T val) {this.val = val;}

  public Node() {}
}


