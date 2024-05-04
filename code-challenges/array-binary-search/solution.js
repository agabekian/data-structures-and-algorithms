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

console.log(binSearch([4, 8, 15, 16, 17, 23, 42], 15));
// console.log(binSearch([-131, -82, 0, 27, 42, 68, 179], 42));
