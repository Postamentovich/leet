function canJump(nums: number[]): boolean {
    let maxIndex = 0;
    
    for (let i = 0; i < nums.length; i++) {
        if (i > maxIndex) {
            return false;
        }
        
        maxIndex = Math.max(maxIndex, i + nums[i]);
        
        if (maxIndex >= nums.length - 1) {
            return true;
        }
    }
    
    return false;
};