function increasingTriplet(nums: number[]): boolean {
    let valueI = Infinity;
    let valueJ = Infinity;


    for (let i = 0; i < nums.length; i++) {
        if (nums[i] <= valueI) {
            valueI = nums[i];
        } else if (nums[i] <= valueJ) {
            valueJ = nums[i];
        } else {
            return true;
        }
    }

    return false;
};