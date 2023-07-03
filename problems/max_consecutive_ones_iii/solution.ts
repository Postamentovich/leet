function longestOnes(nums: number[], k: number): number {
    const zerosCount = nums.filter(num => num === 0).length;
    if (!zerosCount) {
        return nums.length;
    }
    if (zerosCount === nums.length) {
        return k;
    }

    let maximumLength = 0;
    let currentFlippedZeros = 0;
    let left = 0;
    let currentLength = 0;

    while (left + currentLength < nums.length) {
        const nextValue = nums[left + currentLength];

        if (typeof nextValue !== 'number') {
            throw new Error('Boom');
        }

        if (nextValue === 1) {
            currentLength++;
            maximumLength = Math.max(maximumLength, currentLength);
            continue;
        }

        if (currentFlippedZeros < k) {
            currentLength++;
            currentFlippedZeros++;
            maximumLength = Math.max(maximumLength, currentLength);
            continue;
        }

        if (currentLength === 0) {
            left++;
            continue;
        }

        const removedValue = nums[left];

        if (removedValue === 0) {
            currentFlippedZeros--;
            currentLength--;
            left++;
            continue;
        }

        currentLength--;
        left++;
    }

    return maximumLength;
};