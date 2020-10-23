function isAnagram(s: string, t: string): boolean {
    const arrS =  s.split('').sort().join('');
    const arrT = t.split('').sort().join('');
    return arrS === arrT
};