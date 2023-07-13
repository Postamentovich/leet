function orangesRotting(grid: number[][]): number {
    let result = 0;
    const rowsCount = grid.length;
    const colCount = grid[0].length;
    const directions = [[0, 1], [0, -1], [1, 0], [-1, 0]];
    const queue: [[number, number], number][] = [];

    for (let row = 0; row < rowsCount; row++) {
        for(let col = 0; col < colCount; col++) {
            if (grid[row][col] === 2) {
               queue.push([[row, col], 0]) 
            }
        }
    }

    while(queue.length) {
        const [[row, col], count] = queue.shift();

        result = Math.max(result, count);

        for (const [rowshift, colShift] of directions) {
            const newRow = row + rowshift;
            const newCol = col + colShift;

            if (grid[newRow]?.[newCol] === 1) {
                grid[newRow][newCol] = 2;
                queue.push([[newRow, newCol], count + 1]);
            }
        }
    }

   for (let row = 0; row < rowsCount; row++) {
        for(let col = 0; col < colCount; col++) {
            if (grid[row][col] === 1) {
               return -1;
            }
        }
    }

    return result;
};