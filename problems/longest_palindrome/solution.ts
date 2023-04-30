function longestPalindrome(s: string): number {
    if (!s.length) {
        return 0;
    }

    let lettersCounter: Record<string, number> = s.split('').reduce((acc, letter) => {
        if (acc[letter]) {
            acc[letter] = acc[letter] + 1;
        } else {
            acc[letter] = 1;
        }
        return acc;
    }, {});

    let longestPalindrome: number = Object.values(lettersCounter).reduce((acc, count) => {
        const palindromeCount = Math.floor(count / 2) * 2;

        return acc + palindromeCount;
    }, 0);

    if (longestPalindrome < s.length) {
        longestPalindrome++;
    }

    return longestPalindrome;
};