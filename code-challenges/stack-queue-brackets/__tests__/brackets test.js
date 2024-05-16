const validateBrackets = require('../validateBrackets');
describe('validateBruckets', () => {
    test('returns true for a string with balanced brackets', () => {
        expect(validateBrackets("(((())))")).toBe(true);
        expect(validateBrackets("{[()]}")).toBe(true);
        expect(validateBrackets("[{()}]")).toBe(true);
    });

    test('returns false for a string with unbalanced brackets', () => {
        expect(validateBrackets("(")).toBe(false);
        expect(validateBrackets(")")).toBe(false);
        expect(validateBrackets("({)}")).toBe(false);
    });

    test('returns false for a string with mismatched brackets', () => {
        expect(validateBrackets("(]")).toBe(false);
        expect(validateBrackets("{[}")).toBe(false);
        expect(validateBrackets("[)")).toBe(false);
    });

    test('returns true for an empty string', () => {
        expect(validateBrackets("")).toBe(true);
    });

    test('returns true for a string with no brackets', () => {
        expect(validateBrackets("abc")).toBe(true);
    });

    test('returns false for a string with unmatched opening brackets', () => {
        expect(validateBrackets("(((")).toBe(false);
        expect(validateBrackets("{{")).toBe(false);
        expect(validateBrackets("[[[")).toBe(false);
    });

    test('returns false for a string with unmatched closing brackets', () => {
        expect(validateBrackets(")))")).toBe(false);
        expect(validateBrackets("}}")).toBe(false);
        expect(validateBrackets("]]]")).toBe(false);
    });
});