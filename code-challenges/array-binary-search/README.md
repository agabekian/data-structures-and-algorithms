

# Challenge Title
Wtrite a Binary Search Algo
## Whiteboard Process
![code2.png](./code2.png)

## Approach & Efficiency
<!-- What approach did you take? Why? What is the Big O space/time for this approach? -->
Two pointers: l= 0, r = array length define our boundary.

While left is less or equal right, we keep calculating mid-point as (l+r)/2 of our range.

Subdividing the array while l does not meet r :

If mid point == key  return index of the element.

If mid value higher than key, set r (right border) to mid-point -1.

if lower,  set l to mid-pont + 1.

If left and pointer meet without finding the key value return -1
Else return the index of the key value.



_Time Complexity:_ O(log N) -
"Divide and Conquer" makes it log n. <p>

## Solution
```
function binSearch(arr, key) {
  let l = 0, r = arr.length - 1;

  while (l <= r) {
    let mid = Math.floor((l + r) / 2);
    console.log(mid)
    if (arr[mid] === key)
      return mid;
    else if (arr[mid] > key)
      r = mid - 1;
    else
      l = mid + 1;

  }
  return -1;
}
