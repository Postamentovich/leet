function pivotIndex(nums: number[]): number {
    const rightSum = {
        [nums.length - 1]: 0,
    };
    const leftSum = {
        0: 0
    };

    for (let i = 1; i < nums.length; i++) {
        const value = nums[i - 1];
        const previousSum = leftSum[i - 1];
        leftSum[i] = previousSum + value;
    }

    for (let i = nums.length - 2; i >= 0; i--) {
        const value = nums[i + 1];
        const previousSum = rightSum[i + 1];
        rightSum[i] = previousSum + value
    }

    for (let i = 0; i < nums.length; i++) {

        if (rightSum[i] === leftSum[i]) {
            return i;
        }
    }

    return - 1;
};