function arrayInsert(arr, num) {
// Shift all elements one place to the
// back until index
  let mid = Math.floor(arr.length / 2)
  for (let i = arr.length; i > mid; i--) {
    console.log(i, arr[i])
    arr[i] = arr[i - 1];
    console.log(arr);
  }
  arr[mid] = num;// Insert the element at the index
  return arr;
}


// console.log(arrayInsert([1, 2, 3, 4, 5, 6], 8));
console.log(arrayInsert([2, 4, 6, -8], 5));

let crazy = [1,2,3,4,5];
crazy[6] = "dude";
console.log(crazy)

