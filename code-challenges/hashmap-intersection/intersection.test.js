const tree_intersection = require('./tree_intersection');

class MockTreeNode {
    constructor(value, left = null, right = null) {
        this.value = value;
        this.left = left;
        this.right = right;
    }
}

describe('tree_intersection', () => {
    it('returns an array of intersecting values between two trees', () => {
        // Mock trees
        const tree1 = new MockTreeNode(1,
            new MockTreeNode(2),
            new MockTreeNode(3)
        );

        const tree2 = new MockTreeNode(2,
            new MockTreeNode(3),
            new MockTreeNode(4)
        );

        // Call the function
        const result = tree_intersection(tree1, tree2);

        // Assertion
        expect(result.sort((a, b) => a - b)).toEqual([2, 3]); // The intersection should be [2, 3]
    });

    it('returns an empty array if no values intersect', () => {
        // Mock trees
        const tree1 = new MockTreeNode(1,
            new MockTreeNode(2),
            new MockTreeNode(3)
        );

        const tree2 = new MockTreeNode(4,
            new MockTreeNode(5),
            new MockTreeNode(6)
        );

        // Call the function
        const result = tree_intersection(tree1, tree2);

        // Assertion
        expect(result.sort((a, b) => a - b)).toEqual([]); // No intersection
    });

    it('returns the correct intersection for more complex trees', () => {
        // Mock trees
        const tree1 = new MockTreeNode(5,
            new MockTreeNode(3,
                new MockTreeNode(2),
                new MockTreeNode(4)
            ),
            new MockTreeNode(8,
                new MockTreeNode(7),
                new MockTreeNode(9)
            )
        );

        const tree2 = new MockTreeNode(6,
            new MockTreeNode(3,
                new MockTreeNode(2),
                new MockTreeNode(5)
            ),
            new MockTreeNode(9,
                new MockTreeNode(8),
                new MockTreeNode(10)
            )
        );

        // Call the function
        const result = tree_intersection(tree1, tree2);

        // Assertion
        expect(result.sort((a, b) => a - b)).toEqual([2, 3, 5, 8, 9]); // The intersection should be [2, 3, 5, 8, 9]
    });
});
