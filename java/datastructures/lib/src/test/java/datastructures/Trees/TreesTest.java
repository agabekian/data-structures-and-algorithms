package datastructures.trees;

import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.function.Executable;

import java.util.NoSuchElementException;

import static org.junit.jupiter.api.Assertions.*;

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
    System.out.println("**********" + sut2.root.val);
    //check if node val is now root value
    assertEquals(sut2.root.val, 11);
//test contains method in BST
    assertTrue(sut2.contains(11));

  }
}
