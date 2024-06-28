

function matrixRotate(arr) {
    let res = [],
        n = arr.length

    for (let i = 0; i < n; i++) {
        res[i] = [];
        for (let j = 0; j < n; j++) {
            res[i][j] = arr[n - j - 1][i];
        }
    }
    return res
}



let test = [
    [1, 1, 1],
    [2, 2, 2],
    [3, 3, 3]
]
// let test = [
//      0  1  2
//   0 [1, 1, 1],
//   1 [2, 2, 2],
//   2 [3, 3, 3]
// ]
// [
//         [3, 2, 1],
//         [3, 2, 1],
//         [3, 2, 1]
// ]

console.log(matrixRotate(test))