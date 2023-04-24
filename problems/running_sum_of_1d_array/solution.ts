function runningSum(nums: number[]): number[] {
    const result = [];

    let currentSum = 0;
    
    for (let i = 0; i < nums.length; i++) {
        const currentNumber = nums[i];
        currentSum += currentNumber;
        result[i] = currentSum; 
    }

    return result;
};