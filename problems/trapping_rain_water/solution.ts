function trap(height: number[]): number {
    let left = 0;
    let right = height.length - 1;
    let maxLeft = height[0];
    let maxRight = height[height.length - 1];
    let result = 0;

    while (left < right) {
        if (maxLeft < maxRight) {
            left++;
            maxLeft = Math.max(maxLeft, height[left])
            result += maxLeft - height[left]
        } else {
            right--;
            maxRight = Math.max(maxRight, height[right])
            result += maxRight - height[right]
        }
    }

    return result;
};