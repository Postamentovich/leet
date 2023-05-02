function search(nums: number[], target: number): number {
    let left = 0;
    let right = nums.length - 1;

    while (left <= right) {
        const index = left + Math.floor((right - left) / 2);
        const value = nums[index];
        if (value === target) {
            return index;
        }

        if (value < target) {
            left = index + 1;
        } else {
            right = index - 1;
        }
    }

    return - 1;
    
};