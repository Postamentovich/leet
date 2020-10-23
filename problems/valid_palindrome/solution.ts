function isPalindrome(s: string): boolean {
    const lowerStr = s.toLowerCase();
    const arrStr = lowerStr.split('').filter(el => /\w/.test(el) && el !== '_');
    while(arrStr.length) {
        const firstChar = arrStr.shift();
        const lastChar = arrStr.pop();
        if (firstChar && lastChar && firstChar !== lastChar) return false;
    }
    return true;
};