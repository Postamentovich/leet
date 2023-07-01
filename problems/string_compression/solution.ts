function compress(chars: string[]): number {
    const result = [];

    let previousChar;
    let previousCharCount = 0;

    chars.forEach((char) => {
        if (previousChar !== char) {
            if (previousChar) {
                if (previousCharCount > 1) {
                    result.push(previousChar, ...String(previousCharCount).split(''))
                } else {
                    result.push(previousChar)
                }
            }
            previousChar = char;
            previousCharCount = 1;
        } else {
            previousCharCount++
        }
    })
    if (previousChar) {
        if (previousCharCount > 1) {
            result.push(previousChar, ...String(previousCharCount).split(''))
        } else {
            result.push(previousChar)
        }
    }
    const resultLength = result.length;
    chars.length = resultLength;

    for(let i = 0; i < result.length; i++) {
        chars[i] = result[i];
    }
    return resultLength;
};