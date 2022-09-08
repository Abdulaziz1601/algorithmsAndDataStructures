function validAnagram(word, anagram) {
    if (word.length !== anagram.length) {
        return false;
    }
    const wordFreqCount = {};
    const anagramFreqCount = {};
    for (let char of word.split('')) {
        wordFreqCount[char] = (wordFreqCount[char] || 0) + 1;
    }

    for (let char of anagram.split('')) {
        anagramFreqCount[char] = (anagramFreqCount[char] || 0) + 1;
    }

    for (let key in wordFreqCount) {
        if (!(key in anagramFreqCount)) {
            return false;
        }
        if (wordFreqCount[key] !== anagramFreqCount[key]) {
            return false;
        }
    }
    return true;
}