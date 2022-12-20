package datastructures.trees;

import datastructures.queue.Queue;
import datastructures.stack.Stack;

import java.util.ArrayList;

public class BinaryTree<T extends Comparable<T>> {
  public Node root;

  public BinaryTree() {
  }

  public BinaryTree(Node<T> root) {
    this.root = root;
  }

  // Each depth  first traversal method should return an array of values, ordered appropriately.
  // O(N) / O(N) extra linear ds
  public Object[] iPreOrder() {
    //"i"terative solution
    if (root == null) return null;
    ArrayList<Object> list = new ArrayList();
    Stack stack = new Stack();
    stack.push(root);
    while (!stack.isEmpty()) {
      Node cur = (Node) stack.pop();
      System.out.println("cur " + cur.val);
      list.add(cur.val);
      //now check if children exist
      if (cur.right != null) stack.push(cur.right);
      if (cur.left != null) stack.push(cur.left);
    }
    return list.toArray();
  }

//  public Object[] preOrder() {
//    ArrayList values = new ArrayList();
//    preOrder(root, values);
//    return values.toArray();
//  }

  public ArrayList<T> bfs() {
    ArrayList<T> list = new ArrayList<>();
    Queue<Node<T>> q = new Queue<>();
    q.enqueue(root);
    while (!q.isEmpty()) {
      Node<T> cur = q.dequeue();
      System.out.println("bfs cur " + cur.val);
      list.add(cur.val);
      if (cur.left != null) q.enqueue(cur.left);
      if (cur.right != null) q.enqueue(cur.right);
    }

    return list;
  }

  public Object[] preOrder(Node root, ArrayList vals) {
    // node -> left -> right  PLR - DFS
    if (root == null) return null;
    System.out.println("ROOT " + root.val);
    vals.add(root.val);
    Object[] l = preOrder(root.left, vals);
    Object[] r = preOrder(root.right, vals);
    return vals.toArray();
  }

  public ArrayList inOrder() { //
    ArrayList values = new ArrayList();
    inOrder(root, values);
    return values;
  }

  public void inOrder(Node node, ArrayList values) {
    // left -> node -> right LPR
    if (node == null) return;

    inOrder(node.left, values);
    values.add(node.val);
    inOrder(node.right, values);
  }

  public Object[] postOrder() {
    ArrayList values = new ArrayList();
    postOrder(root, values);
    return values.toArray();
  }

  public void postOrder(Node node, ArrayList values) {
    // left -> right -> node LRP (root is dead last! yo )
    if (node == null) return;

    postOrder(node.left, values);
    postOrder(node.right, values);
    values.add(node.val);
    System.out.println("cur is " + node.val);
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
    //dont't try to fight stack and qrite recursive bfs;
    Queue<Node<T>> q = new Queue();
    ArrayList<T> list = new ArrayList<>();
    if (tree.root != null) {
      q.enqueue(tree.root);
      while (q.front != null) {
        Node<T> temp = q.dequeue();
        if (temp.left != null) {
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
