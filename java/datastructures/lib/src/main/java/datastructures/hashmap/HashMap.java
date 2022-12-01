package datastructures.hashmap;

import datastructures.linkedlist.Node;
import datastructures.linkedlist.LinkedList;

import java.util.ArrayList;
import java.util.List;

import static java.util.Objects.hash;

// NOTE: Does NOT preserve insertion order!
// WARNING: Don't make K an Object or Character!
public class HashMap<K, V> {
  ArrayList<LinkedList<HashMapPair<K, V>>> bucketArrayList;  // using ArrayList instead of array so we can instantiate with a parameterized type
  int size;

  public HashMap(int size) {
    if (size < 1) {
      throw new IllegalArgumentException("HashMap size must be 1 or greater!");
    }
    this.size = size;
    this.bucketArrayList = new ArrayList<>(size);
    // Next part is not required, and is a little inefficient, but it makes writing HashMap operations easier
    for (int i = 0; i < this.size; i++) {
      bucketArrayList.add(i, new LinkedList<>());
    }
  }

  // Make sure to replace if the key is a dupe!
  public void set(K key, V value) {
    int index = hash(key);

    HashMapPair<K, V> entry = new HashMapPair<>(key, value);
    if (bucketArrayList.get(index).head != null) { //bucket is not empty
      LinkedList<HashMapPair<K, V>> bList = bucketArrayList.get(index);
      Node<HashMapPair<K, V>> cur;
      cur = bList.head;
      while (cur != null && !cur.val.getKey().equals(key)) {
        cur = cur.next;
      }
      if (cur != null && !cur.val.getValue().equals(value)) {
        cur.val.setValue(value);
        return;
      }
    }
    LinkedList<HashMapPair<K, V>> bList = bucketArrayList.get(index); //not very dry
    bList.append(entry);
    bucketArrayList.set(index, bList);
  }

  public V get(K key) {
    int index = hash(key);
    if (bucketArrayList.get(index) != null) {
      LinkedList<HashMapPair<K, V>> bList = bucketArrayList.get(index);
      Node<HashMapPair<K, V>> cur = bList.head;
      while (cur != null) {
        if (cur.val.getKey().equals(key)) {
          return cur.val.getValue();
        }
        cur = cur.next;
      }
    }
    return null;
  }

  public boolean contains(K key) {

    int index = hash(key);
    if (bucketArrayList.get(index) != null) {
      LinkedList<HashMapPair<K, V>> bList = bucketArrayList.get(index);
      Node<HashMapPair<K, V>> cur = bList.head;
      while (cur != null) {
        if (cur.val.getKey().equals(key)) return true;
        cur = cur.next;
      }
    }
    return false;
  }

  public List<K> keys() {
    List<K> allKeys = new ArrayList<>();
    for (LinkedList<HashMapPair<K, V>> sLList : bucketArrayList) {
      if (sLList != null) {
        Node<HashMapPair<K, V>> runner = sLList.head;
        while (runner != null) {
          allKeys.add(runner.val.getKey());
          runner = runner.next;
        }
      }
    }
    return allKeys;
  }


  // Sometimes hashCode in Java can be negative! So we need to do absolute value
  // If you really want to hash things yourself, look at https://stackoverflow.com/a/113600/16889809
  // Don't use Character! Don't use Object! Don't use any object you have not overridden equals() and hashCode() on!
  // If you do this, things that should collide, won't, because Object.hashCode() is not good
  // Protip: Testing collisions is easy with Integer, because Integer hashes to its own value
  public int hash(K key) {
    return Math.abs(key.hashCode()) % size;
  }
}
