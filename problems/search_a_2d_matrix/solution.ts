function searchMatrix(matrix: number[][], target: number): boolean {
    let row = 0;
    for (let i = 0; i < matrix.length; i++) {
        if (matrix[i][0] > target) {
            break;
        }
        row = i;
    }
    for (let j = 0; j < matrix[0].length; j++) {
        if (matrix[row][j] === target) {
            return true;
        }
    }
    return false;
};