const mergeSort = require ('./mergeSort.js');
// Jest Tests
describe('mergeSort', () => {
    it('sorts an empty array', () => {
        expect(mergeSort([])).toEqual([]);
    });

    it('sorts an array with a single element', () => {
        expect(mergeSort([5])).toEqual([5]);
    });

    it('sorts a pre-sorted array', () => {
        const sortedArray = [1, 2, 3, 4];
        expect(mergeSort(sortedArray)).toEqual(sortedArray);
    });

    it('sorts an unsorted array', () => {
        const unsortedArray = [3, 1, 4, 2];
        const expectedSortedArray = [1, 2, 3, 4];
        expect(mergeSort(unsortedArray)).toEqual(expectedSortedArray);
    });

    it('sorts an array with negative numbers', () => {
        const unsortedArray = [-2, 5, -1, 8];
        const expectedSortedArray = [-2, -1, 5, 8];
        expect(mergeSort(unsortedArray)).toEqual(expectedSortedArray);
    });
});
