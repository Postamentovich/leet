function maxArea(height: number[]): number {
    let left = 0;
    let right = height.length - 1;
    let maximum = 0;

    while (left < right) {
        const leftHeight = height[left];
        const rightHeight = height[right];
        const containerHeight = Math.min(leftHeight, rightHeight);
        const containerLength = right - left;
        const containerSize = containerHeight * containerLength;

        maximum = Math.max(maximum, containerSize);

        if (leftHeight > rightHeight) {
            right--;
        } else {
           left++; 
        }
    }    
    return maximum;
};