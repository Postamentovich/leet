function closeStrings(word1: string, word2: string): boolean {
    if (word1.length !== word2.length) {
        return false;
    }

    const word1Map = new Map();
    const word2Map = new Map();

    for (const char of word1) {
        const charCount = word1Map.get(char) || 0;
        word1Map.set(char, charCount + 1);
    }

    for (const char of word2) {
        const charCount = word2Map.get(char) || 0;
        word2Map.set(char, charCount + 1);
    }

    if (word1Map.size !== word2Map.size) {
        return false;
    }

    for (const [char, count] of word1Map.entries()) {

        if (!word2Map.has(char)) {
            return false;
        }

        const currentCount = word2Map.get(char);

        if (count === currentCount) {
            word2Map.delete(char);
            continue;
        }

        const replaced = Array.from(word2Map.entries()).find(([_, replacedCount]) => replacedCount === count);

        if (!replaced) {
            return false;
        }

        const [replacedChar] = replaced;

        word2Map.set(replacedChar,currentCount);
        word2Map.delete(char);
    }
    return true;
};