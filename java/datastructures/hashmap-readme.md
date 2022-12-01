# Hash Table

Implement a Hashtable class with a *set()*, *get()*, *contains()*, *keys()*, and *hash()*.

## Approach & Efficiency

ArrayList to hold the "buckets"  with linked list for handling the collisions.

Time complexity: ideally, O(1)
Space complexity: O(N).

## API

### Hash Map

* public HashMap(int size)* Intantiates a HashMap of specified size.

* public void set(K key, V value) Adds a node with key/value pair. If the key already present, its _value_  will be overwritten.

* public V get(K key)* Get stored value by key.

* public boolean contains(K key)* True if the key exists, false if not.

* public List<K> keys()* Returns a List of all keys stored in HashMap.

* public int hash(K key)* Returns a hashed positive integer(index) also factoring the size of the HashMap
