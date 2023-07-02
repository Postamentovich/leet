function maxOperations(nums: number[], k: number): number {
  const sortedArray = nums.sort((a, b) => a - b);
  let left = 0;
  let right = nums.length - 1;
  let operationsCount = 0;

  while (left < right) {
    const leftNum = nums[left];
    const rightNum = nums[right];
    const sum = leftNum + rightNum;
    if (sum === k) {
      operationsCount++;
      left++;
      right--;
    } else if (sum < k) {
      left++;
    } else {
      right--;
    }
  }

  return operationsCount;
};