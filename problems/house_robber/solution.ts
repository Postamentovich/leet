function rob(nums: number[]): number {
    const result = new Array(nums.length - 1);
    result.push(nums[nums.length - 1], 0, 0);

    for (let i = nums.length - 2; i >= 0; i--) {
        const currentCount = nums[i];
        const nextCurrent = result[i + 2];
        const nextPlusOneCurrent = result[i + 3];
        result[i] = currentCount + Math.max(nextCurrent, nextPlusOneCurrent);
    }

    return Math.max(...result);
};