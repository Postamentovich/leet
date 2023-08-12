function removeDuplicates(nums: number[]): number {
    let p1 = 0;
    let p2 = 1;
    let result = 1;

    while (p2 < nums.length) {
        let current = nums[p1];
        let next = nums[p2];
        if (current === next) {
            p2++;
        } else {
            p2++;
            p1++;
            nums[p1] = next;
            result++;
        }
    }

    return result;
};