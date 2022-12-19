function removeElement(nums: number[], val: number): number {
    let result = nums.length;
    
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === val) {
            result--
            nums[i] = undefined;
        }
    }

    nums.sort((a) => {
        if (a === undefined) {
            return -1
        }
    });
    
    return result;
};