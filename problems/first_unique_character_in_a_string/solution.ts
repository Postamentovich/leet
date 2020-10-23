function firstUniqChar(s: string): number {
    const hash: {[key: string]: number} = {};
    
    for (let char of s) {
        if (char in hash) {
            hash[char]++
        } else {
            hash[char] = 1
        }
    }
    
    for (let [key, value] of Object.entries(hash)) {
        if (value === 1) return s.indexOf(key)
    }
    
    
    return -1;
};