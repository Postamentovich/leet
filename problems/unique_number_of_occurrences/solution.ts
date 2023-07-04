function uniqueOccurrences(arr: number[]): boolean {
    const map = new Map();

    for (const value of arr) {
        const valueCount = map.get(value) || 0;
        map.set(value, valueCount + 1);
    }

    const uniqueValues = new Set(map.values());
    return map.size === uniqueValues.size;
};