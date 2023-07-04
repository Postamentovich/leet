function findDifference(nums1: number[], nums2: number[]): number[][] {
    const set1 = new Set(nums1);
    const set2 = new Set(nums2);
    const distinct1 = [];
    const distinct2 = [];

    for (const num of set1) {
        if (!set2.has(num)) {
            distinct1.push(num);
        }
    }
    for (const num of set2) {
        if (!set1.has(num)) {
            distinct2.push(num);
        }
    }

    return [distinct1, distinct2];
};