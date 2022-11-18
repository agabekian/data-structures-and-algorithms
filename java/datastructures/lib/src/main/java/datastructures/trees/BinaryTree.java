package datastructures.trees;

import datastructures.queue.Queue;
import datastructures.trees.Node;
import org.checkerframework.checker.units.qual.A;

import javax.swing.tree.TreeNode;
import java.util.ArrayList;

class BinaryTree<T> {

  Node root;

  public BinaryTree() {
  }

  public BinaryTree(Node root) {
    this.root = root;
  }

  // Each depth  first traversal method should return an array of values, ordered appropriately.

  public ArrayList preOrder() {
    ArrayList values = new ArrayList();
    preOrder(root, values);
    return values;
  }

  public void preOrder(Node node, ArrayList values) {
    // node -> left -> right
    if (node == null) return;

    values.add(node.val);
    preOrder(node.left, values);
    preOrder(node.right, values);
  }

  public ArrayList inOrder() {
    ArrayList values = new ArrayList();
    inOrder(root, values);
    return values;
  }

  public void inOrder(Node node, ArrayList values) {
    // left -> node -> right
    if (node == null) return;

    inOrder(node.left, values);
    values.add(node.val);
    inOrder(node.right, values);
  }

  public ArrayList postOrder() {
    ArrayList values = new ArrayList();
    postOrder(root, values);
    return values;
  }

  public void postOrder(Node node, ArrayList values) {
    // left -> right -> node
    if (node == null) return;

    postOrder(node.left, values);
    postOrder(node.right, values);
    values.add(node.val);
  }

  public int findMax(Node node) {
    if (node == null) return 0;
    int max = (int) node.val;
    int leftVal = findMax(node.left);
    int rightVal = findMax(node.right);
    if (leftVal > max) max = leftVal;
    if (rightVal > max) max = rightVal;
    return max;
  }

  // 17 Breadth-first Traversal. w/ Generics. LC102

  public ArrayList<T> BFS(BinaryTree<T> tree) {
    Queue<Node<T>> q = new Queue();
    ArrayList<T> list = new ArrayList<>();
    if (tree.root != null) {
      q.enqueue(tree.root);
      while (q.front!=null) {
        Node<T> temp = q.dequeue();
        if (temp.left != null ) {
          q.enqueue(temp.left);
        }
        if (temp.right != null) {
          q.enqueue(temp.right);
        }
        list.add(temp.val);
      }
    }
    return list;
  }
}
