/**
 Do not return anything, modify board in-place instead.
 */
type CellCoord = [number, number];

function getCoordinatesKey([row, column]: CellCoord) {
  return `${row}|${column}`;
}

function solve(board: string[][]): void {
  const rows = board.length;
  const columns = board[0].length;
  const path: CellCoord[] = [];
  const wrongKeys = new Map<string, boolean>();

  for (let row = 0; row < board.length; row++) {
    const rowLength = board[row].length;
    for (let column = 0; column < rowLength; column++) {
      if (row !== 0 && row !== board.length - 1 && column !== 0 && column !== rowLength - 1) {
        continue;
      }
      if (board[row][column] === "O") {
        path.push([row, column]);
      }
    }
  }

  function checkStep(row: number, column: number) {
    if (row < 0 || row >= rows) {
      return;
    }
    if (column < 0 || column >= columns) {
      return;
    }
    if (board[row][column] === "O" && !wrongKeys.has(getCoordinatesKey([row, column]))) {
      path.push([row, column]);
    }
  }

  while (path.length) {
    const node = path.shift()!;
    wrongKeys.set(getCoordinatesKey(node), true);
    const [row, column] = node;

    checkStep(row + 1, column);
    checkStep(row - 1, column);
    checkStep(row, column + 1);
    checkStep(row, column - 1);
  }

  for (let row = 0; row < board.length; row++) {
    const rowLength = board[row].length;
    for (let column = 0; column < rowLength; column++) {
      if (wrongKeys.get(getCoordinatesKey([row, column]))) {
        board[row][column] = "O";
      } else {
        board[row][column] = "X";
      }
    }
  }
}