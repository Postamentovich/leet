function minDistance(word1: string, word2: string): number {
    const result = [];

    for (let i = 0; i <= word1.length; i++) {
        result.push(Array(word2.length + 1).fill(Infinity));
    }

    for (let i = 0; i <= word1.length; i++) {
        result[i][word2.length] = word1.length - i;
    }

    for (let i = 0; i <= word2.length; i++) {
        result[word1.length][i] = word2.length - i;
    }

    for (let i = word1.length - 1; i >= 0; i--) {
        for (let j = word2.length - 1; j >= 0; j--) {
            if (word1[i] === word2[j]) {
                result[i][j] = result[i + 1][j + 1]
            } else {
                result[i][j] = 1 + Math.min(result[i + 1][j + 1], result[i][j + 1], result[i + 1][j])
            }
        }
    }

    return result[0][0];
};