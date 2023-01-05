package datastructures.graph;

import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.function.Executable;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
import java.util.NoSuchElementException;

import static org.junit.jupiter.api.Assertions.*;


public class GraphTest {
  @Test
  void TestGraphCreation() {
  //list of edges with their associated weight
    List<Edge> edges = Arrays.asList(new Edge(1, 4, 3), new Edge(4, 2, 5), new Edge(2, 5, 10), new Edge(5, 1, 6), new Edge(3, 2, 9), new Edge(1, 5, 1), new Edge(3, 5, 2));
  //create graph
    Graph graph = new Graph(edges);
//prints the corresponding adjacency list for the graph
    Graph.printGraph(graph);
  }
}

