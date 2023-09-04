function threeSum(nums: number[]): number[][] {
    const result = [];
    nums.sort((a, b) => a - b);

    for (let i = 0; i < nums.length; i++) {
        if (i > 0 && nums[i] === nums[i - 1]) {
            continue;
        }

        let left = i + 1;
        let right = nums.length - 1;

        while (left < right) {
            const current = nums[i] + nums[left] + nums[right];
            if (current === 0) {
                result.push([nums[i], nums[left], nums[right]])
                right--;
                left++;
                while (nums[left] == nums[left - 1] && left < right) {
                    left++
                }
            } else if (current > 0) {
                right--;
            } else {
                left++;
            }
        }
    }

    return result;
};