package datastructures.hashmap;

import datastructures.linkedlist.LinkedList;
import datastructures.linkedlist.Node;

import java.util.ArrayList;
import java.util.List;

// NOTE: Does NOT preserve insertion order!
// WARNING: Don't make K an Object or Character!
public class HashMap<K, V> {
  ArrayList<LinkedList<HashMapPair<K, V>>> bucket;  // using ArrayList instead of array so we can instantiate with a parameterized type
  int capacity;
  int size = 0;

  public HashMap() {
    capacity = 10;
    this.bucket = new ArrayList<>(capacity);
    for (int i = 0; i < this.capacity; i++) {
      bucket.add(i, new LinkedList<HashMapPair<K, V>>());
    }
  }

  public int size() {
    return size;
  }

  public HashMap(int size) {
    if (size < 1) {
      throw new IllegalArgumentException("HashMap size must be 1 or greater!");
    }
    this.capacity = size;
    this.bucket = new ArrayList<>(size);
    for (int i = 0; i < this.capacity; i++) {
      bucket.add(i, new LinkedList<HashMapPair<K, V>>());
    }
  }

  public void set(K key, V val) {
    int index = hash(key);
    HashMapPair<K, V> newPair = new HashMapPair<>(key, val); //create

    if (bucket.get(index) != null) { // using hashed key locate bucket (array list el) in
      LinkedList<HashMapPair<K, V>> list = bucket.get(index); // id sll list
      Node<HashMapPair<K, V>> cur = list.head; //                create sll runner
      while (cur != null && !cur.val.getKey().equals(key)) { //while not null advance through NON-matching KEY el of list
        cur = cur.next;
      }
      if (cur != null && !cur.val.equals(val)) { //once correct key found with  not equal value
        cur.val.setValue(val);   // set cur val
        System.out.println("OVER-WRITING VALUE of cur SLL element");
        return;
      } else {
        System.out.println("Looks like this key/val has not yet been set- will add");
      }
    }
    if (size == bucket.size()) {
      expandCapacity();
    }
    LinkedList<HashMapPair<K, V>> list = bucket.get(index);
    System.out.println("Adding K/V pair!");
    list.append(newPair);
    bucket.set(index, list);
    size++;
  }


  private void setDuringExpand(K key, V val, ArrayList<LinkedList<HashMapPair<K, V>>> newBucketList) {
    int index = hash(key);
    HashMapPair<K, V> newPair = new HashMapPair<>(key, val);
    if (newBucketList.get(index) != null) {
      LinkedList<HashMapPair<K, V>> list = newBucketList.get(index);
      Node<HashMapPair<K, V>> cur;
      cur = list.head;
      while (cur != null && !cur.val.getKey().equals(key)) {
        cur = cur.next;
      }
      if (cur != null && !cur.val.equals(val)) {
        cur.val.setValue(val);
        return;
      }
    }
    LinkedList<HashMapPair<K, V>> list = newBucketList.get(index);
    list.append(newPair);
    newBucketList.set(index, list);
    size++;
  }

  public V get(K key) {
    int index = hash(key);
    if (bucket.get(index) != null) {
      LinkedList<HashMapPair<K, V>> list = bucket.get(index);
      Node<HashMapPair<K, V>> cur;
      cur = list.head;
      while (cur != null && !cur.val.getKey().equals(key)) {
        cur = cur.next;
      }
      if (cur != null) {
        return cur.val.getValue();
      }
    }
    return null;
  }

  public boolean contains(K key) {
    int index = hash(key);
    if (bucket.get(index) != null) {
      LinkedList<HashMapPair<K, V>> list = bucket.get(index);
      Node<HashMapPair<K, V>> cur;
      cur = list.head;
      while (cur != null && !cur.val.getKey().equals(key)) {
        cur = cur.next;
      }
      return cur != null;
    }
    return false;
  }

  public List<K> keys() {
    List<K> output = new ArrayList<>();
    for (LinkedList<HashMapPair<K, V>> list : bucket) {
      if (list != null) {
        Node<HashMapPair<K, V>> cur;
        cur = list.head;
        while (cur != null) {
          output.add(cur.val.getKey());
          cur = cur.next;
        }
      }
    }
    return output;
  }

  public int hash(K key) {
    return Math.abs(key.hashCode()) % capacity;
  }

  private void expandCapacity() {
    size = 0;
    capacity *= 2;
    ArrayList<LinkedList<HashMapPair<K, V>>> newBucketList = new ArrayList<>(capacity);
    for (int i = 0; i < capacity; i++) {
      newBucketList.add(i, new LinkedList<HashMapPair<K, V>>());
    }
    for (LinkedList<HashMapPair<K, V>> list : bucket) {
      if (list != null) {
        Node<HashMapPair<K, V>> cur;
        cur = list.head;
        while (cur != null) {
          setDuringExpand(cur.val.getKey(), cur.val.getValue(), newBucketList);
          cur = cur.next;
        }
      }
    }
    bucket = newBucketList;
  }
}
