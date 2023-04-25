function isIsomorphic(s: string, t: string): boolean {
    if (s.length !== t.length) {
        return false;
    }
    for (let i = 1; i < s.length; i++) {
        if (t.indexOf(t[i]) !== s.indexOf(s[i])) {
            return false;
        }
    }
    return true;
};