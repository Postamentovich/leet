function removeStars(s: string): string {
    const result = [];

    let index = 0;

    while (index < s.length) {
        const char = s[index];
        if (char === '*') {
            result.pop();
        } else {
            result.push(char);
        }
        index++;
    }

    return result.join('');
};