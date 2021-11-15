function largestDivisibleSubset(nums: number[]): number[] {
    if (nums.length < 2) {
		return nums;
	  }
	  nums.sort((o1, o2) => o1 - o2);
	  let arr = Array(nums.length);
	  arr[arr.length - 1] = [nums[nums.length - 1]];
	  let max = [];
	  for (let i = arr.length - 2; i >= 0; i--) {
		let c = [nums[i]];
		for (let j = i + 1; j < arr.length; j++) {
		  if (nums[j] % nums[i] == 0 && 1 + arr[j].length > c.length) {
			c = [nums[i]].concat(arr[j]);
		  }
		}
		arr[i] = c;
		if (max.length < c.length) {
		  max = c;
		}
	  }
	  return max;
}