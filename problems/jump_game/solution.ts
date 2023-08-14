function canJump(nums: number[]): boolean {
    let maxIndex = 0;

    for (let i = 0; i < nums.length; i++) {
        if (i > maxIndex) {
            return false;
        }
        const jumpIndex = i + nums[i];
        maxIndex = Math.max(jumpIndex, maxIndex)
    }

    return true;
};