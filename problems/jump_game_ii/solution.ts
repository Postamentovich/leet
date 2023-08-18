function jump(nums: number[]): number {
    let jumps = 0;
    let maxDistance = 0;
    let jumpPosition = 0;

    for (let i = 0; i < nums.length -1; i++) {
        maxDistance = Math.max(maxDistance, nums[i] + i);

        if (i === jumpPosition) {
            jumps++;
            jumpPosition = maxDistance;
        }
    }

    return jumps;
};