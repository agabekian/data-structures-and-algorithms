package datastructures.linkedlist;


public class LinkedList<T> {

  public Node<T> head = null;

  public int size() {
    int res = 0;
    Node cur = head;
    while (cur != null) {
      cur = cur.next;
      res++;
    }
    return res;
  }

  public void checkArgs(LinkedList head) {
    if (head == null) {
      throw new IllegalArgumentException("Null given as arg");
    }
  }

  public void insert(T val) { //insert at the beginning of list, ie new head
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

  //            System.out.println(l1.val + " cur of A-list");
  static LinkedList zip(LinkedList A, LinkedList B) {
      if (A.size() < 1) {
        //check for empty list
        System.out.println(A.size()+ " A list is empty");
        return B;
      }
      Node a = A.head;
      Node b = B.head;
    System.out.println("is there B?" + b);
      while (b != null) {
        Node temp = a.next;     //stash item 2 from listA
        a.next = b;         //make item 1 on listB the new item 2 on listA
        a = b;              //make what was the listB item 1 the new listA.
        b = temp;           //The SWAP. make the stashed item 2 of A (now orphaned) the swapped list B
      }
      return A; //ok not to check B for size since we do not return it.  But check for A - yes.
  }
//  static LinkedList zip(LinkedList A, LinkedList B) { // less fun solution
//    if (A.head != null && B.head != null) {
//      Node a = A.head;
//      Node b = B.head;
//      Node tempA;
//      Node tempB;
//      while (a != null && b != null) {
//        System.out.println(a.val);
//        tempA = a.next;
//        tempB = b.next;
//        a.next = b;
//        b.next = tempA;
//        a = tempA;
//        b = tempB;
//      }
//      return A;
//    }
//    return null;
//  }

}
