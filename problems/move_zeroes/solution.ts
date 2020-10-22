/**
 Do not return anything, modify nums in-place instead.
 */
function moveZeroes(nums: number[]): void {
    const result = nums.filter(el => el !== 0);
    const zerosCount = nums.length - result.length;
    const zeros = new Array(zerosCount).fill(0);
    result.push(...zeros);
    result.forEach((el, index) => {
        nums[index] = el;
    })
};