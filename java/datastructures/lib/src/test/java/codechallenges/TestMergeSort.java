package codechallenges;

import org.junit.jupiter.api.Test;

import java.util.Arrays;

import static org.junit.jupiter.api.Assertions.assertArrayEquals;

  public class TestMergeSort {
    @Test
    void given() {
      Sort sut = new Sort();
      int[] arr = {8, 4, 23, 42, 16, 15};
      int[] expect = {4, 8, 15, 16, 23, 42};
      sut.mergeSort(arr);
      assertArrayEquals(arr, expect);
    }

    @Test
    void reverseSorted() {
      Sort sut = new Sort();
      int[] arr = {20, 18, 12, 8, 5, -2};
      int[] expect = {-2, 5, 8, 12, 18, 20};
      sut.mergeSort(arr);
      assertArrayEquals(arr, expect);
    }

    @Test
    void fewUniq() {
      Sort sut = new Sort();
      int[] arr = {5, 12, 7, 5, 5, 7};
      int[] expect = {5, 5, 5, 7, 7, 12};
      sut.mergeSort(arr);
      assertArrayEquals(arr, expect);
    }

    @Test
    void nearlySorted() {
      Sort sut = new Sort();
      int[] arr = {2, 3, 5, 7, 13, 11};
      int[] expect = {2, 3, 5, 7, 11, 13};
      sut.mergeSort(arr);
      assertArrayEquals(arr, expect);
    }
}
