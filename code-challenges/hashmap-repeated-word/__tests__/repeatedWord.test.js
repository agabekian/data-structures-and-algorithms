const findFirstRepeatedWord = require('../repeatedWord'); // Adjust the path as necessary

describe('findFirstRepeatedWord', () => {
    test('returns the first repeated word when there is a repeated word', () => {
        expect(findFirstRepeatedWord("It was best, but not best perhaps")).toBe("BEST");
    });

    test('returns "bummer" when there is no repeated word', () => {
        expect(findFirstRepeatedWord("It was the best of times")).toBe("bummer");
    });

    test('handles punctuation correctly', () => {
        expect(findFirstRepeatedWord("Hello world! Hello universe.")).toBe("HELLO");
    });

    test('is case insensitive', () => {
        expect(findFirstRepeatedWord("Hello hello")).toBe("HELLO");
    });

    test('handles an empty string', () => {
        expect(findFirstRepeatedWord("")).toBe("bummer");
    });

    test('handles a string with one word', () => {
        expect(findFirstRepeatedWord("Hello")).toBe("bummer");
    });

    test('handles multiple spaces between words', () => {
        expect(findFirstRepeatedWord("It   was    best but   not best")).toBe("BEST");
    });
});
