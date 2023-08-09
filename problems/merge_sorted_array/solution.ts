/**
 Do not return anything, modify nums1 in-place instead.
 */
function merge(nums1: number[], m: number, nums2: number[], n: number): void {
    let num1pointer = m - 1;
    let num2pointer = n - 1;
    let pointer = nums1.length - 1;

    while (pointer >= 0) {
        let lastNum1 = nums1[num1pointer] ?? -Infinity;
        let lastNum2 = nums2[num2pointer] ?? -Infinity;
        let maxNum;

        if (lastNum1 >= lastNum2) {
            num1pointer--;
            maxNum = lastNum1;
        } else {
            num2pointer--;
            maxNum = lastNum2;
        }
        nums1[pointer] = maxNum;
        pointer--;
    }
};