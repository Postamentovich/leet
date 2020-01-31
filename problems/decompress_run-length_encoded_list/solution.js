var decompressRLElist = function(nums) {
  let result = [];

  for (let i = 0; i < nums.length; i++) {
    if (i % 2 === 0) {
      const freq = nums[i];
      const val = nums[i + 1];

      const item = Array(freq).fill(val);

      result = [...result, ...item];
    }
  }

  return result;
};