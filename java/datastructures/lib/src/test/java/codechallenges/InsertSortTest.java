package codechallenges;
import org.junit.jupiter.api.Test;


import static org.junit.jupiter.api.Assertions.*;

public class InsertSortTest
{

  @Test
  void mirror() {
    Sort sut = new Sort();
    int[] testArr = {20, 18, 12, 8, 5, -2};
    int[] expect = {-2, 5, 8, 12, 18, 20};
    sut.insertionSort(testArr);
    assertArrayEquals(testArr, expect);
  }

  @Test
  void fewUniq() {
    Sort sut = new Sort();
    int[] arr = {5, 12, 7, 5, 5, 7};
    int[] expect = {5, 5, 5, 7, 7, 12};
    sut.insertionSort(arr);
    assertArrayEquals(arr, expect);
  }

  @Test
  void almostSorted() {
    Sort sut = new Sort();
    int[] arr = {2, 3, 5, 7, 13, 11};
    int[] expect = {2, 3, 5, 7, 11, 13};
    sut.insertionSort(arr);
    assertArrayEquals(arr, expect);
  }

  @Test
  void empty() {
    Sort sut = new Sort();
    int[] arr = {};
    int[] expect = {};
    sut.insertionSort(arr);
    assertArrayEquals(arr, expect);
  }
}
