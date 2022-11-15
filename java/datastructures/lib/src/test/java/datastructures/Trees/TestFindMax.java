package datastructures.trees;

import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.function.Executable;

import java.util.NoSuchElementException;

import static org.junit.jupiter.api.Assertions.*;

import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.*;


public class TestFindMax {
  @Test
  void testBinaryTress() {
    BinaryTree sut = new BinaryTree();
    sut.root = new Node(2);
    sut.root.left = new Node(7);
    sut.root.right = new Node(5);
    sut.root.left.right = new Node(6);
    sut.root.left.right.left = new Node(1);
    sut.root.left.right.right = new Node(11);
    sut.root.right.right = new Node(9);
    sut.root.right.right.left = new Node(4);

    int res = sut.findMax(sut.root);
    assertTrue(res == 11);

  }
}
