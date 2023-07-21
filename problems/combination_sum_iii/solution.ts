function combinationSum3(k: number, n: number): number[][] {
    const result = [];
    const matrix = [];
    
    for (let i = 0; i < k; i++) {
        matrix.push([1, 2, 3, 4, 5, 6, 7, 8, 9])
    }

    function recursion(level: number, path: number[] , sum: number) {
        const numbers = matrix[level];

        if (!numbers) {
            if (sum === n) {
                result.push(path);
            }
            return;
        }

        if (sum > n) {
            return;
        }

        const lastPathNumber = path[path.length - 1] || 0;

        for (const num of numbers) {
            if (num > lastPathNumber) {
                recursion(level + 1, [...path, num], sum + num);
            }
        }
    }

    recursion(0, [], 0);

    return result;
};