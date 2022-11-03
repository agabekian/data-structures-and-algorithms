# Singly Linked List


###  Challenges
Implement a Singly Linked List with methods:
 insert()
 includes()
 toString()

#### Tests:
Instantiate an empty linked list.

Verify insertion into the linked list with the correct new head value.

Will return true when finding a value within the linked list that exists and false otherwise.

Verify that the output string contains correct values and formatted correctly after running toString() method.

#### Perfomance, time complexity.

insert(): O(1) because we add it directly to the head of the list.

includes(): O(N), since the worst case is where the node we look for is last or not present, ie having to travese the _entire_ list

To String(): O(N) since we have to traverse the entire list to build the ouyputs string.

#### API docs

_void insert(val)_ The insert method takes an integer as an arg and adds the node with the arg val as the new head of the list.
nked-list-kth

_boolean includes(val)_
Takes target integer value as an _arg_ and returns true if the node's integer value is found in the list.

_String toString()_
Returns a string representation of the linked list.

_void append(int val)_ Append method, appends value to the end of SLL. Does not check for null input.
time: O(N)

_void insertBefore(int val, int newVal)_ insert the new node with newVal _before_ the node with the given value (val). Checks for null arg and if val is the beginning of thelist.

time: O(N)

_void insertAfter(int val, int newVal)_ insert the new node with newVal _after_ the node with the given value (val).

time: O(N)

_kthFromEnd(int k)_ Reverses(in-place) the list and returns Kth value of the node from what would be the end of the original list

time: O(2N)
space: O(1)
Test: assertTrue that the string "find me" is found at k=2.

_middle()_ Returns val of the middle node. Build on reverse() method which now have a counter to track list length.

_zip()_ Given two linked list args, method"Stitches" and mutates and returns  L1 list after re-linking alternatively nodes between l1 and l2
