

export function zipLists(list1, list2) {
    if (!list1 && !list2) return null;
    if (!list1 || !list2) {
        return list1 || list2;
    }
    let cur1 = list1.head,
        cur2 = list2.head; //2 pointers to lists

    while (cur1 && cur2) {
        let next1 = cur1.next, //store lists ".nexts" 8 & 808
            next2 = cur2.next; //
        // console.log("pointers", next1.val,next2.val)
        cur1.next = cur2; //zip to list2   11->
                                            // 101->808->909
        // console.log("cur1=head", cur1, "now point to list2 ",cur1.next)
        if (next1) { // is next stored null ?
            cur2.next = next1; // 101 --> 8
            cur1 = next1; //advance cur1 to next1: 101 >> 8
            cur2 = next2; //advance cur2 to next2  808 >> 909
            console.log("CUR2 is now next", cur2)
        } else break;
    }
    return list1;
}

//for tests

let node1 = new Node(11);
let node2 = new Node(8);

let node3 = new Node(101);
let node4 = new Node(808);
let node5 = new Node(909);
node1.next = node2;
node3.next = node4;
node4.next = node5;

let l1 = new LinkedList();
let l2 = new LinkedList();
l1.insert(node1);
l2.insert(node3);



const mergedList = zip(l1, l2); //expect 11,101,8,808,13,null

let currentNode = mergedList.head;
while (currentNode) {
    console.log(currentNode.val);
    currentNode = currentNode.next;
}
// testChain.insert(node1);
// let nodeToIns = new Node(13);
// testChain.insertBefore(8, nodeToIns);
// testChain.toString()
// let nodeToInsAfter = new Node(999)
// testChain.insertAfter(11, nodeToInsAfter)
// console.log(testChain.toString());

