function singleNumber(nums: number[]): number {
    while (nums.length) {
        const value = nums.shift();
        const dublicateIndex = nums.findIndex(el => el === value);
        if (dublicateIndex === -1) {
            return value as number;
        }
        nums.splice(dublicateIndex, 1)
    }
    
    
//     for (let i = 0; i < nums.length; i++) {
       
//         console.log('value', value);
        
//         console.log('dublicateIndex', dublicateIndex);
        
//         console.log('nums', nums)
//     }
    return 0;
};