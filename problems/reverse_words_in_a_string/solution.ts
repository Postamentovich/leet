function reverseWords(s: string): string {
    const words = [];
    let currentWord = [];
    const letters = s.split('');
    while (letters.length) {
        const letter = letters.shift();
        if (letter === ' ') {
            if (currentWord.length) {
                words.push(currentWord.join(''));
                currentWord = []
            }
            continue;
        }
        currentWord.push(letter);
    }
    if (currentWord.length) {
        words.push(currentWord.join(''));
    }
    return words.reverse().join(' ');
};