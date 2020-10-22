/**
 Do not return anything, modify nums in-place instead.
 */
function rotate(nums: number[], k: number): void {
    const tempArray = nums.splice(nums.length - k, k);
    nums.unshift(...tempArray)
};