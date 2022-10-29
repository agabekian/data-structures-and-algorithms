package datastructures.linkedlist;

public class LinkedList<T> {

    public Node<T> head = null;

    public void insert(T val) {
      Node<T> newHead = new Node<T>(val);
      newHead.next = head;
      head = newHead;
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



}
