function longestSubarray(nums: number[]): number {
    let deletedCount = 0;
    let maximumLength = 0;
    let right = 0;
    let left = 0;

    while (right < nums.length) {
        const nextValue = nums[right];

        if (typeof nextValue !== 'number') {
            throw new Error('Boom')
        }

        if (nextValue === 1) {
            right++;
            maximumLength = Math.max(maximumLength, right - left);
            continue;
        }

        if (deletedCount === 0) {
            deletedCount = 1;
            right++;
            maximumLength = Math.max(maximumLength, right - left);
            continue;
        }

        if (right - left === 0) {
            left++;
            continue;
        }

        const removedValue = nums[left];

        if (removedValue === 0) {
            deletedCount = 0;
        }

        left++
    }

    return maximumLength - 1;
};