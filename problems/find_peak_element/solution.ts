function findPeakElement(nums: number[]): number {
    for (let i = 0; i < nums.length; i++) {
        const previous = nums[i - 1] ?? -Infinity;
        const current = nums[i];
        const next = nums[i + 1] ?? -Infinity;

        if (current > next && current > previous) {
            return i;
        }
    }
};