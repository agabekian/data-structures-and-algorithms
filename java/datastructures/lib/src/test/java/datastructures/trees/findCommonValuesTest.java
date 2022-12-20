package datastructures.trees;


import codechallenges.TreeIntersection.TreeIntersection;
import org.junit.jupiter.api.Test;

import java.util.ArrayList;
import java.util.Arrays;

import static org.junit.jupiter.api.Assertions.*;


public class findCommonValuesTest {
  @Test
  void test_TreeIntersection() {
    BinaryTree sut1 = new BinaryTree();
    sut1.root = new Node(2);
    sut1.root.left = new Node(7);
    sut1.root.right = new Node(5);
    sut1.root.left.right = new Node(6);
    sut1.root.left.right.left = new Node(1);
    sut1.root.left.right.right = new Node(11);
    sut1.root.right.right = new Node(9);
    sut1.root.right.right.left = new Node(4);

    BinaryTree sut2 = new BinaryTree();
    sut2.root = new Node(2);
    sut2.root.left = new Node(11);
    sut2.root.right = new Node(9);
    sut2.root.left.right = new Node(1001);

    ArrayList<Integer> res = TreeIntersection.commonValues(sut1, sut2);
    Integer[] expectedCommonVals = {11};
    assertTrue(res.size() == 3 && res.contains(2) && res.contains(11)&& res.contains(9)); //contains all and only 3 commonvals
  }
}
