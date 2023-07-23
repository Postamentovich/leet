function uniquePaths(m: number, n: number): number {
    const result = [];
    for (let i = 0; i < m; i++) {
        result.push([])
    }

    for (let r = m - 1; r >= 0; r--) {
        for (let c = n - 1; c >= 0; c--) {
            if (r === m - 1 && c === n - 1) {
                result[r][c] = 1;
                continue;
            }
            const down = result[r + 1]?.[c] || 0;
            const right = result[r]?.[c + 1] || 0;
            result[r][c] = right + down;
        }
    }

    return result[0][0]
};