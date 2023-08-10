function removeElement(nums: number[], val: number): number {
    let count = nums.length;
    for (let i = 0; i < nums.length;i++) {
        const num = nums[i];
        if (num === val) {
            nums[i] = Infinity;
            count--;
        }
    }
    nums.sort((a, b) => a - b);
    return count;
};