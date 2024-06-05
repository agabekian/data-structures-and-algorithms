

# Comparison Sort
In JavaScript, comparison sorts generally involve comparing elements of an array and rearranging them based on the comparison result. Here's a basic explanation of how comparison sorts work in JavaScript:

Comparison Function: JavaScript sorting functions typically take a comparison function as an argument. This function defines the criteria for sorting elements.

Comparison Logic: The comparison function compares two elements at a time, conventionally denoted as a and b. It returns a negative value if a should come before b, a positive value if a should come after b, and zero if a and b are considered equal.

Sorting Algorithm: JavaScript engines often use efficient sorting algorithms like Quick Sort or Merge Sort internally to sort the elements of the array. These algorithms use the comparison function to determine the order of elements during sorting.

Stability: Stability refers to whether the original order of equal elements is preserved after sorting. In JavaScript, the default behavior is stable sorting, meaning that equal elements will retain their relative order after sorting.

Here's an example of how you might use a comparison sort in JavaScript:


> // Sample array to sort
const array = [4, 2, 7, 1, 9, 3];

    // Using the sort method with a comparison function
    array.sort((a, b) => a - b);

    console.log(array); // Output: [1, 2, 3, 4, 7, 9]
In this example, the sort method is called on the array, and a comparison function (a, b) => a - b is provided. This function subtracts b from a, which causes the array to be sorted in ascending order. If you wanted to sort in descending order, you could reverse the subtraction: (a, b) => b - a.

JavaScript's built-in sorting method (Array.prototype.sort()) allows for flexibility in sorting various types of data structures and provides a convenient way to sort arrays using custom comparison logic.

Initial Array: [7, 2, 1, 6, 8, 5, 3, 4]

> 1. Choose a pivot element (usually the last element) - in this case, pivot = 4
    
> 1. 2. Partition the array around the pivot:
   [2, 1, 3]    [4]    [8, 5, 7, 6]
   | pivot |        |    pivot   |

    3. Recursively apply Quick Sort to the left and right sub-arrays:
    - Left sub-array: [2, 1, 3]
        - Choose pivot = 3
        - Partition: [1, 2] [3]
    - Right sub-array: [8, 5, 7, 6]
        - Choose pivot = 6
        - Partition: [5] [6] [8, 7]

    4. Final sorted array:
    [    1, 2, 3, 4, 5, 6, 7, 8]

### BIgO
Best Case (Average Case): O(n log n)

Quick Sort's average time complexity occurs when the partitioning step divides the input array into roughly equal halves at each recursive call. This leads to efficient sorting with log n recursive calls, each taking O(n) time for partitioning.
Worst Case: O(n^2)

In the worst-case scenario, Quick Sort may encounter highly unbalanced partitioning, resulting in n-1 recursive calls, each dealing with one less element than the previous call. This leads to quadratic time complexity.
Despite the worst-case scenario, Quick Sort is favored for sorting large datasets due to its average-case performance and in-place sorting nature. Various optimizations can further enhance its efficiency, making it one of the most widely used sorting algorithms.
