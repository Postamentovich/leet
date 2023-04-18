function mergeAlternately(word1: string, word2: string): string {
    const result = [];
    const maximumLength = Math.max(word1.length, word2.length);
    for (let i = 0; i < maximumLength; i++) {
        const letterFromWord1 = word1[i];
        if (letterFromWord1) {
            result.push(letterFromWord1);
        }
        const letterFromWord2 = word2[i];
        if (letterFromWord2) {
            result.push(letterFromWord2);
        }
    }
    return result.join('');
};