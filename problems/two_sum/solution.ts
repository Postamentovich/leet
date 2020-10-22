function twoSum(nums: number[], target: number): number[] {
    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            const valueA = nums[i];
            const valueB = nums[j];
            if (valueA + valueB === target) {
                return [i, j]
            }
        }
    }
    return [0, 0];
};