function equalPairs(grid: number[][]): number {
    const rowsMap = new Map();
    const columMap = new Map();
    let equalsCount = 0;

    for (let row = 0; row < grid.length; row++) {
        const currentGrid = grid[row];
        rowsMap.set(grid, currentGrid);

        for (let column = 0; column < grid.length; column++) {
            const currentColumn = columMap.get(column) || [];
            columMap.set(column, [...currentColumn, currentGrid[column]])
        }
    }

    const columnsKeys = new Map();

    for (const column of columMap.values()) {
        const columnKey = column.join(',');
        const currentKeyCount = columnsKeys.get(columnKey) || 0;
        columnsKeys.set(columnKey, currentKeyCount + 1);
    }


    for (const row of grid) {
        const rowKey = row.join(',');
        if (columnsKeys.has(rowKey)) {
            equalsCount += columnsKeys.get(rowKey);
        }
    }

    return equalsCount;
};