
package datastructures.trees;

import java.util.ArrayList;

public class KAryTreeNode<T> {
  public T value;
  public ArrayList<KAryTreeNode<T>> leafList;

  public KAryTreeNode() { //default
    leafList = new ArrayList<>();
  }

  public KAryTreeNode(T value) {
    leafList = new ArrayList<>();
    this.value = value;
  }

  public void addChild(KAryTreeNode<T> child) {
    leafList.add(child);
  }

}
