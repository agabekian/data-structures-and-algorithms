package datastructures.linkedlist;

public class LinkedList<T> {

  public Node<T> head = null;

  public void insert(T val) {
    Node<T> newHead = new Node<T>(val);
    newHead.next = head;
    head = newHead;
  }

  public boolean includes(T val) {
    Node<T> cur = head;
    while (cur != null) {
      if (cur.val == val) {
        System.out.println("found" + cur.val);
        return true;
      }
      cur = cur.next;
    }
    return false;
  }

  @Override
  public String toString() {
    String res = "";
    Node<T> cur = head;
    while (cur != null) {
      res += "{ " + cur.val + " } -> ";
      cur = cur.next;
    }
    return res + "NULL";
  }

  //day 2 sll monday
  public void append(T val) {
    Node<T> cur = head;
//    Node<T> prev = head;
    while (cur.next != null) {
      cur = cur.next;
    }
    cur.next = new Node(val);
  }

  public void insertBefore(T val, T newVal) {
    if (val == head.val) {
      System.out.println("dude");
      insert(newVal);
      return;
    }
    if(head.val==null){
      throw new IllegalArgumentException("null given");
    }
    Node<T> cur = head;
    Node<T> prev = head;
    while (cur.val != val) {
      prev = cur;
      cur = cur.next;
    }
    prev.next = new Node(newVal);
    prev.next.next = cur;
  }

  public void insertAfter(T val, T newVal) {
    Node<T> cur = head;
    Node<T> prev = head;
    while (cur.val != val) {
      cur = cur.next;
      prev = prev.next;
    }
    System.out.println("-----" + cur.val);
    cur.next = new Node(newVal);
    cur.next.next = prev;
  }

}
