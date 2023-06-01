function reverseVowels(s: string): string {
    const vowelSymbolsLowerCase = ['a', 'e', 'i', 'o', 'u'];
    const vowelSymbolsUpperCase = vowelSymbolsLowerCase.map(letter => letter.toUpperCase());
   const vowelSymbols = [...vowelSymbolsLowerCase, ...vowelSymbolsUpperCase];

    const vowelLetters = s
        .split('')
        .filter(letter => vowelSymbols.includes(letter))
        .reverse();

    return s.split('').map(letter => {
        if (vowelSymbols.includes(letter)) {
            return vowelLetters.shift();
        }

        return letter;
    }).join('');

};