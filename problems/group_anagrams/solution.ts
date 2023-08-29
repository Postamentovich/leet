function groupAnagrams(strs: string[]): string[][] {
    const stringsMap = {};
    for (const str of strs) {
        const sortedString = str.split('').sort().join('');
        if (stringsMap[sortedString]) {
            stringsMap[sortedString].push(str)
        } else {
            stringsMap[sortedString] = [str]
        }
    }
    return Object.values(stringsMap)
};