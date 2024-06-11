const Hashtable = require("../../hash-table/Hashtable.js");

function repeated(text) {
    const seenWords = new Hashtable();
    const cleanedText = text.toUpperCase()
        .replace(/[^\w\s]/g, '')
        .split(/\s+/);//!! woot multi spaces
    // console.log(cleanedText)
    // Split text into words using spaces
    for (let word of cleanedText) {
        if (seenWords.has(word)) {
            return word;
        } else
            seenWords.set(word, true);
    }
    return "bummer";
}

// console.log(repeated("It was best, but not best perhaps"));

module.exports = repeated;


