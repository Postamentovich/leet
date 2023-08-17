function lengthOfLastWord(s: string): number {
    const words = s.trim().split(' ');
    return words[words.length - 1].length;
};