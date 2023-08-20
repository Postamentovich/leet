function productExceptSelf(nums: number[]): number[] {
    const leftProduct = [];
    let currentLeftProduct = 1;
    for (let i = 0; i < nums.length; i++) {
        leftProduct[i] = currentLeftProduct;
        currentLeftProduct *= nums[i]
    }

    const rightProduct = [];
    let currentRightProduct = 1;
    for (let i = nums.length - 1; i >= 0; i--) {
        rightProduct[i] = currentRightProduct;
        currentRightProduct *= nums[i];
    }

    const result = [];

    for (let i = 0; i < nums.length; i++) {
        result[i] = leftProduct[i] * rightProduct[i];
    }

    return result;
};