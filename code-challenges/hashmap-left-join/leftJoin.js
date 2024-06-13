const expect = require('jest').expect;
function leftJoin(synonyms, antonyms) {
    let result = [];
    for (let word in synonyms) {
        let synonym = synonyms[word];
        let antonym = antonyms[word];
        result.push([word, synonym, antonym || null]);
    }
    return result;
}

module.exports =   leftJoin;
