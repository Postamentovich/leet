
function isValidSudoku(board: string[][]): boolean {
    const rowsMap = new Map<number, string[]>();
    const columnsMap = new Map<number, string[]>();
    const squareMap = new Map<string, string[]>();


    for (let row = 0; row < 9; row++) {
        for (let column = 0; column < 9; column++) {
            const value = board[row][column];
            if (value === '.') {
                continue;
            }
            const rowNumbers = rowsMap.get(row) || [];
            const colNumbers = columnsMap.get(column) || [];
            const squareKey = `${Math.floor(row / 3)}-${Math.floor(column / 3)}`;
            const squareNumbers = squareMap.get(squareKey) || [];
            if (rowNumbers.includes(value) ||
                colNumbers.includes(value) ||
                squareNumbers.includes(value)) {
                return false;
            }
            columnsMap.set(column, [...colNumbers, value])
            rowsMap.set(row, [...rowNumbers, value])
            squareMap.set(squareKey, [...squareNumbers, value])
        }
    }

    return true;
};