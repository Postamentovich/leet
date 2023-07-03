function maxVowels(s: string, k: number): number {
    const vowelLetters = ['a', 'e', 'i', 'o', 'u'];
    let currentCount = 0;
    let maximumCount = 0;

    for (let i = 0; i < k; i++) {
        if (vowelLetters.includes(s[i])) {
            currentCount++;
            maximumCount++;
        }
    }

    for (let i = k; i < s.length; i++) {
        const previousLetter = s[i - k];
        const nextLetter = s[i];
        if (vowelLetters.includes(nextLetter)) {
            currentCount++;
        }
        if (vowelLetters.includes(previousLetter)) {
            currentCount--;
        }
        maximumCount = Math.max(maximumCount, currentCount);
    }

    return maximumCount;
};