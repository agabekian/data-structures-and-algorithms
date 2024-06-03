const insertionSort = require('./insertionSort');

describe('Insertion Sort', () => {
    it('should sort an array of numbers in ascending order', () => {
        const inputArray = [5, 2, 4, 6, 1, 3];
        const sortedArray = insertionSort(inputArray);
        expect(sortedArray).toEqual([1, 2, 3, 4, 5, 6]);
    });

    it('should sort an array of strings in lexicographical order', () => {
        const inputArray = ['banana', 'apple', 'cherry', 'date'];
        const sortedArray = insertionSort(inputArray);
        expect(sortedArray).toEqual(['apple', 'banana', 'cherry', 'date']);
    });

    it('should return an empty array if input array is empty', () => {
        const inputArray = [];
        const sortedArray = insertionSort(inputArray);
        expect(sortedArray).toEqual([]);
    });

    it('should return the same array if it contains only one element', () => {
        const inputArray = [42];
        const sortedArray = insertionSort(inputArray);
        expect(sortedArray).toEqual([42]);
    });

    it('should correctly sort a large array', () => {
        const inputArray = [9, 5, 7, 1, 3, 8, 2, 4, 6, 10];
        const sortedArray = insertionSort(inputArray);
        expect(sortedArray).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
    });
});
