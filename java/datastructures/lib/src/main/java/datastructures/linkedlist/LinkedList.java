package datastructures.linkedlist;

public class LinkedList<T> {

  public Node<T> head = null;

  public void checkArg(LinkedList head) {
    if (head == null) {
      throw new IllegalArgumentException("Null given as arg");
    }
  }

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
      insert(newVal);
      return;
    }
    if (head.val == null) {
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
    Node<T> temp = cur.next;
    cur.next = new Node(newVal);
    cur.next.next = temp;
  }

  public int reverseLL() {
    int listLen = 1;
    System.out.println("reversing");
    Node<T> cur = head;
    Node<T> prev = null;
    Node<T> temp = null;
    while (cur != null) {
      temp = cur.next;
      cur.next = prev;
      prev = cur;
      cur = temp;
      listLen += 1;
    }
    System.out.println("new head" + prev.val);
    head = prev;
    return listLen; //again!
  }

  public T kthFromEnd(T k) {
    int counter = 1;
    reverseLL();
    System.out.println("sll rev" + head.val);
    Node<T> cur = head;
    while (counter < (int) k) {
      System.out.println(counter);
      counter++;
      cur = cur.next;

    }
    System.out.println("stopped at " + cur.val);
    return cur.val;
  }

  public T middle() {
    int counter = 1;
    int len = reverseLL();
    int range = len / 2;
    System.out.println("sll rev" + head.val);
    Node<T> cur = head;
    while (counter < range) {
      System.out.println(counter);
      counter += 1;
      cur = cur.next;
    }
    System.out.println("stopped at " + cur.val);
    return cur.val;
  }

  public void zip(Node<T> l1, Node<T> l2){

    Node<T> node1next,node2next;

    while(l1!=null && l2!=null){
      node1next = l1.next;
      l1.next = l2;
      node1next = node1next;

      node2next = l2.next;
      l2.next = node1next;
      l2 = node2next;

    }
    System.out.println("HEAD"+head);

  }

}
