function isPalindrome(x: number): boolean {
    if (x < 0) {
        return false;
    }
    const stringArray = String(x).split('');
    const reversedStringArray = [...stringArray].reverse();
    for (let i = 0; i < stringArray.length; i++) {
        const a = stringArray[i];
        const b = reversedStringArray[i];
        if (a !== b) {
            return false;
        }
    }
    return true;
};