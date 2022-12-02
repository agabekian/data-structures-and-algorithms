package codechallenges;

public class Sort {
  public void insertionSort(int[] arr) {
    for (int i = 1; i < arr.length; i++) {
      int j = i - 1;
      int temp = arr[i];
      while (j >= 0 && temp < arr[j]) {
        System.out.println("j " + arr[j] + "temp " + temp);
        arr[j + 1] = arr[j];
        j--;
      }
      arr[j + 1] = temp;
    }
  }

  public void mergeSort(int[] arr) {
    int n = arr.length, mid = n / 2;
    if (n < 2) return;

    int[] left = new int[mid];
    int[] right = new int[n - mid];
    //populate left
    for (int i = 0; i < mid; i++) {
      left[i] = arr[i];
    }
    //populate right half
    for (int i = mid; i < n; i++) {
      right[i - mid] = arr[i];
    }
      //sort left side
      mergeSort(left);
      //right= side
      mergeSort(right);
      // merge sorted L & R
      merge(left, right, arr);

  }
  void merge(int[] left, int[] right, int[] arr) {
    int i = 0, j = 0, k = 0; //left, right and new merged array iterators. ok
    while (i < left.length && j < right.length) { //merging array back comparing left and right atomic arrays
      if (left[i] <= right[j]) {
        arr[k] = left[i];
        i++;
      } else {
        arr[k] = right[j];
        j++;
      }
      k++; // result array advance pos
    }
      while (i < left.length) { //for remaining elements of left array if R is processed.
        arr[k++] = left[i++];
      }
      while (j < right.length) {//for remaining elements of right array if L is done.
        arr[k++] = right[j++];
      }
    }
}

