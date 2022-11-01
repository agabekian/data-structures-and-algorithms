#Singly Linked List


###  Challenge
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

_boolean includes(val)_
Takes target integer value as an _arg_ and returns true if the node's integer value is found in the list.

_String toString()_
Returns a string representation of the linked list.

_void append(val)_ Append method, appends value to the end of SLL. Does not check for null input.

_void insertBefore(val, newVal)_ insert the new node with newVal _before_ the node with the given value (val). Checks for null arg and if val is the beginning of thelist.

_void insertAfter(val, newVal)_ insert the new node with newVal _after_ the node with the given value (val).
