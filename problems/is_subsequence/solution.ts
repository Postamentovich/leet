function isSubsequence(s: string, t: string): boolean {
    let tStringArray = t.split('');

    for (let i = 0; i < s.length; i++) {
        const sLetter = s[i];
        const tLetterIndex = tStringArray.findIndex((letter) => letter === sLetter);

        if (tLetterIndex === -1) {
            return false;
        }

        tStringArray = tStringArray.slice(tLetterIndex + 1);
    }

    return true;
};