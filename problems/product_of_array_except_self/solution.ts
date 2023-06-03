function productExceptSelf(nums: number[]): number[] {
    const prefix = [];
    for (let i = 0; i < nums.length; i++) {
        const previousProduce = prefix[i - 1] ?? 1;
        prefix[i] = previousProduce * nums[i];
    }
    const postfix = [];
    for (let i = nums.length - 1; i >= 0; i--) {
        const nextProduce = postfix[i + 1] ?? 1;
        postfix[i] = nextProduce * nums[i];
    }
    const result = [];
    for (let i = 0; i < nums.length; i++) {
        const left = prefix[i - 1] ?? 1;
        const right = postfix[i + 1] ?? 1;
        result.push(left * right);
    }
    return result;
};