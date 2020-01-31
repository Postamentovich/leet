var findNumbers = function(nums) {
    return nums.reduce((r, n) => 9 < n && n < 100 || 999 < n && n < 10000 ? ++r : r, 0);
};