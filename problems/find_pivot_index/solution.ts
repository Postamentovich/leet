function pivotIndex(nums: number[]): number {
    const numsSum = nums.reduce((acc, num) => acc + num, 0);
    let leftSum = 0;
    let rightSum = numsSum;

    for (let i = 0; i < nums.length; i++) {
        const currentNumber = nums[i];
        rightSum -= currentNumber;

        if (leftSum === rightSum) {
            return i;
        }

        leftSum += currentNumber;
    }

    return -1;
};