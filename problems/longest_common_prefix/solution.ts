function longestCommonPrefix(strs: string[]): string {
    let result = '';
    strs.sort((a, b) => b.length - a.length);
    const longestWord = strs[0];
    for (let i = 0; i < longestWord.length; i++) {
        const allWordsIncludeLetter = strs.every((str) => str[i] === longestWord[i]);
        if (!allWordsIncludeLetter) {
            break;
        }
        result += longestWord[i];
    }
    return result;
};