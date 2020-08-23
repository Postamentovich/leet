function removeDuplicates(nums: number[]): number {
    const unique = [... new Set(nums)];
    for (let i = 0; i < unique.length; i++) {
        nums[i] = unique[i]
    }
    return unique.length;
};