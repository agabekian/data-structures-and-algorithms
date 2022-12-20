package datastructures.trees;

import static org.junit.jupiter.api.Assertions.*;

import datastructures.trees.BinaryTree;
import org.junit.jupiter.api.Test;

import java.util.Arrays;

import static org.junit.jupiter.api.Assertions.assertNotNull;

import java.util.ArrayList;


public class TreesTest {
  @Test
  void testBinaryTress() {
    //can instantiate empty tree
    BinaryTree sut = new BinaryTree();
    assertNull(sut.root);
    //test initializing empty BST and adding a node
    BinarySearchTree sut2 = new BinarySearchTree();
    System.out.println(sut2.root);
    //BST init with root is null

    assertNull(sut2.root);
    //BST add a node
    sut2.add(11);
    sut2.add(13);
    sut2.add(1968);
    System.out.println("**********" + sut2.root.val);
    //check if node val is now root value
    assertEquals(sut2.root.val, 11);
    //test contains method in BST
    assertTrue(sut2.contains(11));
    //how to test string?
    ArrayList dude = new ArrayList();
//    dude = sut2.iPreOrder(sut2.root);
    System.out.println("preorder " + dude);
  }

  @Test
  void test_PreOrder() {
    BinaryTree<String> sut = new BinaryTree<>();
    Node<String> a = new Node<>("A");
    Node<String> b = new Node<>("B");
    Node<String> c = new Node<>("C");
    Node<String> d = new Node<>("D");
    Node<String> e = new Node<>("E");
    Node<String> f = new Node<>("F");
    Node<String> g = new Node<>("G");
    sut.root = a;
    a.left = b;
    a.right = e;
    b.left = c;
    b.right = d;
    e.left = f;
    e.right = g;
    //              (A)
    //             /   \
    //          (B)     (E)
    //         /   \   /   \
    //       (C)  (D) (F)  (G)
    String[] preExpect = {"A", "B", "C", "D", "E", "F", "G"};
    String[] postExpect = {"C", "D", "B", "F", "G", "E", "A"};
    String[] bfsExpect = {"A", "B", "E", "C", "D", "F", "G"};

    ArrayList input = new ArrayList();
    System.out.println("return of traversal " + sut.iPreOrder() + "xxxxxxxxtest " + preExpect);
    assert (Arrays.equals(sut.iPreOrder(), preExpect)); //ierative pre-order
//    assert(Arrays.equals(sut.preOrder(sut.root,input), preExpect)); //recursive pre-order
    assert (Arrays.equals(sut.bfs().toArray(), bfsExpect));

//    assert(Arrays.equals(sut.postOrder(), postExpect)); //recursive pre-order
  }
}
//
