const Hashtable = require('../../hash-table/Hashtable');

function tree_intersection(tree1, tree2) {
    const intersectionSet = new Hashtable();
    const intersection = [];

    // In-order traversal of tree1 to add elements to the hash map
    function traverseInOrder(node) {
        if (node) {
            traverseInOrder(node.left);
            intersectionSet.set(String(node.value), true); // Ensure the key is a string
            traverseInOrder(node.right);
        }
    }

    traverseInOrder(tree1); // Traverse tree1

    // Traverse tree2, checking for existence in the hash map
    function traverseAndCheck(node) {
        if (node) {
            traverseAndCheck(node.left);
            if (intersectionSet.has(String(node.value))) { // Ensure the key is a string
                intersection.push(node.value); // Found a match, add to intersection array
                intersectionSet.set(String(node.value), false); // Mark as processed to avoid duplicates
            }
            traverseAndCheck(node.right);
        }
    }

    traverseAndCheck(tree2); // Traverse tree2

    return intersection; // Return the set of intersecting values
}

module.exports = tree_intersection;
