package codechallenges;
import codechallenges.Sorting.*;
import org.junit.jupiter.api.Test;


import static org.junit.jupiter.api.Assertions.*;

public class testSorting {

  @Test
  void given() {
    Sorting sut = new Sorting();
    int[] testArr = {20, 18, 12, 8, 5, -2};
    int[] expect = {-2, 5, 8, 12, 18, 20};
    sut.insertionSort(testArr);
    assertArrayEquals(testArr, expect);
  }

  @Test
  void fewUniq() {
    Sorting sut = new Sorting();
    int[] arr = {5, 12, 7, 5, 5, 7};
    int[] expect = {5, 5, 5, 7, 7, 12};
    sut.insertionSort(arr);
    assertArrayEquals(arr, expect);
  }

  @Test
  void almostSorted() {
    Sorting sut = new Sorting();
    int[] arr = {2, 3, 5, 7, 13, 11};
    int[] expect = {2, 3, 5, 7, 11, 13};
    sut.insertionSort(arr);
    assertArrayEquals(arr, expect);
  }

  @Test
  void empty() {
    Sorting sut = new Sorting();
    int[] arr = {};
    int[] expect = {};
    sut.insertionSort(arr);
    assertArrayEquals(arr, expect);
  }
}
