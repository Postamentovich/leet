function twoSum(nums, target) {
    const hash = nums.reduce((acc, value, index) => {
        const indexes = acc[value];
        if (!indexes) {
            acc[value] = [index]
        } else {
            acc[value].push(index)
        }
        return acc
    }, {})

    for (let i = 0; i < nums.length; i++) {
        const difference = target - nums[i];
        const indexes = hash[difference];
        if (!indexes) {
            continue;
        }
        for (const y of indexes) {
            if (y !== i) {
                return [i, y]
            }
        }
    }
}