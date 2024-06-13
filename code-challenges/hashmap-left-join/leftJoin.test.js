const leftJoin = require("./leftJoin");
describe('leftJoin function', () => {
    test('should join synonyms and antonyms correctly when both hashmaps have values', () => {
        const synonyms = {
            'happy': 'joyful',
            'sad': 'unhappy',
            'bright': 'radiant'
        };
        const antonyms = {
            'happy': 'unhappy',
            'bright': 'dark'
        };
        const expectedResult = [
            ['happy', 'joyful', 'unhappy'],
            ['sad', 'unhappy', null],
            ['bright', 'radiant', 'dark']
        ];
        expect(leftJoin(synonyms, antonyms)).toEqual(expectedResult);
    });

    test('should join synonyms and antonyms correctly when antonyms hashmap is empty', () => {
        const synonyms = {
            'happy': 'joyful',
            'sad': 'unhappy',
            'bright': 'radiant'
        };
        const antonyms = {};
        const expectedResult = [
            ['happy', 'joyful', null],
            ['sad', 'unhappy', null],
            ['bright', 'radiant', null]
        ];
        expect(leftJoin(synonyms, antonyms)).toEqual(expectedResult);
    });

    test('should join synonyms and antonyms correctly when synonyms hashmap is empty', () => {
        const synonyms = {};
        const antonyms = {
            'happy': 'unhappy',
            'bright': 'dark'
        };
        const expectedResult = [];
        expect(leftJoin(synonyms, antonyms)).toEqual(expectedResult);
    });
});
