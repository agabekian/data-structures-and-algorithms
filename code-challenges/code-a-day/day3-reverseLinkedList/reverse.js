const Node = require('../../../linked-list/Node');

function reverse(head) {
    let prev = null,
        cur = head,
        following = null //also can be named temp but this is clearer

    while (cur) {
        following = cur.next; // "Save" the next node
        if (following === null) console.log("NULL REACHED",cur)
        cur.next = prev; //rewire/reverse next to prev node(at first to 'null')
        prev = cur; // prev points from null to cur node (actual HEAD ref), hard part for me to conceptualize, seemed "loopy"
        cur = following;
    }
    return prev;
}

module.exports = reverse;