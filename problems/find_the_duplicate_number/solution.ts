function findDuplicate(nums: number[]): number {
    const sorted = [...nums].sort((a, b) => a - b);

    for (let i = 0; i < sorted.length; i++) {
        if (sorted[i] === sorted[i + 1]) {
            return sorted[i];
        }
    }
};