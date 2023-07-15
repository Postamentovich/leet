function findKthLargest(nums: number[], k: number): number {
    const resultIndex = nums.length - k;

    function quickSelect(leftIndex: number, rightIndex: number) {
        const pivot = nums[rightIndex];
        let pointer = leftIndex;

        for (let i = leftIndex; i < rightIndex; i++) {
            if (nums[i] <= pivot) {
                if (pointer !== i) {
                    [nums[i], nums[pointer]] = [nums[pointer], nums[i]];
                }
                pointer++;
            }
        }

        [nums[pointer], nums[rightIndex]] = [nums[rightIndex], nums[pointer]]

        if (pointer > resultIndex) {
            return quickSelect(leftIndex, pointer - 1);
        } else if (pointer < resultIndex) {
            return quickSelect(pointer + 1, rightIndex);
        } else {
            return nums[pointer];
        }
    }

    return quickSelect(0, nums.length - 1);
};