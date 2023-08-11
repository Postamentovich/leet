function removeDuplicates(nums: number[]): number {
    let uniquesNums = new Set(nums);

    Array.from(uniquesNums).forEach((value, index) => {
        nums[index] = value;
    })

    return uniquesNums.size;
};