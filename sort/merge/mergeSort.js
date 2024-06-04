function mergeSort(arr) {
    if (arr.length <= 1) {
        return arr; // Base case: already sorted (single element or empty array)
    }

    const mid = Math.floor(arr.length / 2); // Calculate middle index
    const left = arr.slice(0, mid); // Left sub-array
    const right = arr.slice(mid); // Right sub-array

    // Sort left and right sub-arrays recursively
    return merge(mergeSort(left), mergeSort(right));
}

function merge(left, right) {
    const result = [];
    let i = 0;
    let j = 0;
    let k = 0;

    while (i < left.length && j < right.length) {
        if (left[i] <= right[j]) {
            result[k] = left[i];
            i++;
        } else {
            result[k] = right[j];
            j++;
        }
        k++;
    }

    // Copy remaining elements
    while (i < left.length) {
        result[k] = left[i];
        i++;
        k++;
    }
    while (j < right.length) {
        result[k] = right[j];
        j++;
        k++;
    }

    return result;
}

module.exports = mergeSort;