package datastructures.linkedlist;
public class LinkedList
{
  public class SLL<T>{
    public Node<T> head = null;

  @Override
  public String toString() {
    A
    Node<T> cur = head;
      while(cur!=null){
        cur = cur.next;
      }
    }
  public void insert(T val){
    Node<T> newHead = new Node<T>(val);
    newHead.next = head;
  }


}
