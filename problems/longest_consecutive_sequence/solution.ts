function longestConsecutive(nums: number[]): number {
    if (!nums.length) {
        return 0;
    }

    let longest = 0;

    const numsSet = new Set(nums);

    for (const num of numsSet) {
        if (numsSet.has(num - 1)) {
            continue;
        }
        let currentLongest = 1;
        while(numsSet.has(num + currentLongest)) {
            currentLongest++;
        }
        longest = Math.max(longest, currentLongest)
    }

    return longest
};