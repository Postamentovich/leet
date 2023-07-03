function findMaxAverage(nums: number[], k: number): number {
    let currentSum = null;
    let maxAverage = -Infinity;

    for (let i = 0; i < nums.length - k + 1; i++) {
        if (currentSum === null) {
            currentSum = nums
                .slice(i, i + k)
                .reduce((acc, value) => acc + value, 0);
            maxAverage = currentSum / k;
            continue;
        }
        const previousValue = nums[i - 1];
        const nextValue = nums[i + k - 1];
        currentSum = currentSum - previousValue + nextValue;
        maxAverage = Math.max(maxAverage, currentSum / k);
    }
    return maxAverage;
};