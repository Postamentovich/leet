function twoSum(nums, target) {
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      const firstNumber = nums[i];
      const secondNumber = nums[j];
      if (firstNumber + secondNumber === target) return [i, j];
    }
  }
}