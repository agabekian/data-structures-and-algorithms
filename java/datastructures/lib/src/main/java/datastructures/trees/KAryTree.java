package datastructures.trees;
import java.util.ArrayList;

public class KAryTree<T extends Comparable<T>> {
  KAryTreeNode<T> root;
  public KAryTree() {
  }
  public KAryTree(KAryTreeNode<T> root) {
    this.root = root;
  }

  @Override
  public String toString() {
    ArrayList<String> list = new ArrayList<>();
    if (root.leafList != null)
      list.add(root.value.toString());
    buildPreOrderList(list, root);
    return list.toString();
  }
  private void buildPreOrderList(ArrayList<String> list, KAryTreeNode<T> inputNode) {
    if (inputNode.leafList!=null) {
      for (KAryTreeNode<T> node : inputNode.leafList) {
        list.add(node.value.toString());
        buildPreOrderList(list, node);
      }
    }
  }
}
