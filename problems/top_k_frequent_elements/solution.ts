function topKFrequent(nums: number[], k: number): number[] {
    const hash: Record<string, number> = {};

    for (const num of nums) {
        const count = hash[num] || 0;
        hash[num] = count + 1;
    }

    return Object.entries(hash)
        .sort((a, b) => b[1] - a[1])
        .slice(0, k).map(item => Number(item[0]))
};