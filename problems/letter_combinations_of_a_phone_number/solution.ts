function letterCombinations(digits: string): string[] {
    if (!digits.length) {
        return []
    }

    const map = {
        '2': ['a', 'b', 'c'],
        '3': ['d', 'e', 'f'],
        '4': ['g', 'h', 'i'],
        '5': ['j', 'k', 'l'],
        '6': ['m', 'n', 'o'],
        '7': ['p', 'q', 'r', 's'],
        '8': ['t', 'u', 'v'],
        '9': ['w', 'x', 'y', 'z'],
    }

    const result = [];

    const matrix = digits.split('').map(digit => map[digit]);

    function recursive(level: number, path: string[]) {
        const letters = matrix[level];

        if (!letters) {
            result.push(path.join(''));
            return;
        }

        for (const letter of letters) {
            recursive(level + 1, [...path, letter]);
        }
    }

    recursive(0, []);

    return result;
};