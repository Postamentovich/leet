function intersect(nums1: number[], nums2: number[]): number[] {
    const result = [];
    
    while (nums1.length) {
        const value = nums1.shift() as number;
        console.log('value', value);
        const value2Index = nums2.findIndex(el => el === value);
        
        if (value2Index > -1) {
            result.push(value);
            nums2.splice(value2Index, 1)
        }
    }
    
    
    return result;
};