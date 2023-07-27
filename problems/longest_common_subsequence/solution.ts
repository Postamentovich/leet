function longestCommonSubsequence(text1: string, text2: string): number {
    const result = [];

    for (let i = 0; i <= text1.length; i++) {
        result.push(new Array(text2.length + 1).fill(0));
    }

    for (let i = text1.length - 1; i >= 0; i--) {
        for (let j = text2.length - 1; j >= 0; j--) {
            if (text1[i] === text2[j]) {
                result[i][j] = 1 + result[i + 1][j + 1]
            } else {
                result[i][j] = Math.max(result[i + 1][j], result[i][j + 1])
            }
        }
    }

    return result[0][0];
};