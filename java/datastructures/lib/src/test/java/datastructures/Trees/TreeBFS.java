package datastructures.trees;

import static org.junit.jupiter.api.Assertions.*;

import org.junit.jupiter.api.Test;
import java.util.ArrayList;
import static org.junit.jupiter.api.Assertions.*;

import java.util.Arrays;
import java.util.List;

public class TreeBFS {

  //test integers
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

    ArrayList<Integer> res = sut.BFS(sut);
    ArrayList<Integer> arr = new ArrayList<Integer>(Arrays.asList(2, 7, 5, 6, 9, 1, 11, 4));
    assertEquals(res,arr); //BFS left -> right

  }

  //test chars for fun
  @Test
  void testBinaryTressChars() {
    BinaryTree sut = new BinaryTree();
    sut.root = new Node('H');
    sut.root.left = new Node('E');
    sut.root.right = new Node('L');
    sut.root.left.right = new Node('L');
    sut.root.left.right.left = new Node('O');


    ArrayList<Character> res = sut.BFS(sut); //testing chars
    ArrayList<Character> arr = new ArrayList<Character>(Arrays.asList('H','E','L','L','O'));
    assertEquals(res,arr); //BFS left -> right
  }
}
