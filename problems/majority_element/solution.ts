function majorityElement(nums: number[]): number {
    let countMap = {};
    for (let i = 0; i < nums.length; i++) {
        const num = nums[i];
        const numCount = countMap[num] || 0;
        if (numCount + 1 > nums.length / 2) {
            return num;
        }
        countMap[num] = numCount + 1;
    }
};