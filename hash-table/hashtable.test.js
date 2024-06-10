const Hashtable = require('./Hashtable');

describe('Hashtable', () => {
    let hashtable;

    beforeEach(() => {
        hashtable = new Hashtable();
    });

    test('set and get a key-value pair', () => {
        hashtable.set('name', 'Alice');
        expect(hashtable.get('name')).toBe('Alice');
    });

    test('set should replace the value for an existing key', () => {
        hashtable.set('name', 'Alice');
        hashtable.set('name', 'Bob');
        expect(hashtable.get('name')).toBe('Bob');
    });

    test('get should throw an error if the key does not exist', () => {
        expect(() => hashtable.get('nonexistent')).toThrow('KeyError: nonexistent not found in hashtable.');
    });

    test('has should return true if the key exists', () => {
        hashtable.set('name', 'Alice');
        expect(hashtable.has('name')).toBe(true);
    });

    test('has should return false if the key does not exist', () => {
        expect(hashtable.has('nonexistent')).toBe(false);
    });

    test('keys should return all keys in the hashtable', () => {
        hashtable.set('name', 'Alice');
        hashtable.set('age', '30');
        expect(hashtable.keys()).toEqual(expect.arrayContaining(['name', 'age']));
    });

    test('keys should return an empty array if the hashtable is empty', () => {
        expect(hashtable.keys()).toEqual([]);
    });
});
