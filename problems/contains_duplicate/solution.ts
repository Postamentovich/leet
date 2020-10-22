function containsDuplicate(nums: number[]): boolean {
    const unique = new Set(nums);
    if (unique.size !== nums.length) return true;
    return false
};