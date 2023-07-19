function minEatingSpeed(piles: number[], h: number): number {
    let left = 1;
    let right = Math.max(...piles);
    let result = right;

    while (left <= right) {
        const mid = Math.floor((left + right) / 2);
        const hours = piles.reduce((acc, value) => {
            return acc + Math.ceil(value / mid);
        }, 0);

        if (hours > h) {
            left = mid + 1;
        } else {
            result = Math.min(result, mid);
            right = mid - 1;
        }
    }

    return result;
};