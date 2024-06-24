function isAnagram(str1, str2) {

    let s1 = str1.replace(/\s/g, '').toLowerCase();
    let s2 = str2.replace(/\s/g, '').toLowerCase();

    if (s1.length !== s2.length) return false; // Early exit if the lengths are not equal

    let matrix = new Array(28).fill(0);

    for (let i = 0; i < s1.length; i++) {
        let code = s1.codePointAt(i) - 97;
        matrix[code]++;
    }

    for (let i = 0; i < s2.length; i++) {
        let code = s2.codePointAt(i) - 97;
        matrix[code]--;
    }
    // Check if all counts are zero
    for (let i = 0; i < 26; i++) {
        if (matrix[i] !== 0)
            return false;
    }
    return true;
}

console.log(isAnagram("Clint Eastwood", "Old West Action"))