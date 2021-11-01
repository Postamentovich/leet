// https://leetcode.com/problems/surrounded-regions/

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

describe("surrounded-regions", () => {
  it("case 1", () => {
    const board = [
      ["X", "X", "X", "X"],
      ["X", "O", "O", "X"],
      ["X", "X", "O", "X"],
      ["X", "O", "X", "X"],
    ];
    solve(board);
    expect(board).toEqual([
      ["X", "X", "X", "X"],
      ["X", "X", "X", "X"],
      ["X", "X", "X", "X"],
      ["X", "O", "X", "X"],
    ]);
  });
  it("case 2", () => {
    const board = [["X"]];
    solve(board);
    expect(board).toEqual([["X"]]);
  });
  it("case 3", () => {
    const board = [
      ["O", "O", "O"],
      ["O", "O", "O"],
      ["O", "O", "O"],
    ];
    solve(board);
    expect(board).toEqual([
      ["O", "O", "O"],
      ["O", "O", "O"],
      ["O", "O", "O"],
    ]);
  });
  it("case 4", () => {
    const board = [
      ["X", "O", "X"],
      ["X", "O", "X"],
      ["X", "O", "X"],
    ];
    solve(board);
    expect(board).toEqual([
      ["X", "O", "X"],
      ["X", "O", "X"],
      ["X", "O", "X"],
    ]);
  });
  it("case 5", () => {
    const board = [
      ["O", "X", "X", "O", "X"],
      ["X", "O", "O", "X", "O"],
      ["X", "O", "X", "O", "X"],
      ["O", "X", "O", "O", "O"],
      ["X", "X", "O", "X", "O"],
    ];
    solve(board);
    expect(board).toEqual([
      ["O", "X", "X", "O", "X"],
      ["X", "X", "X", "X", "O"],
      ["X", "X", "X", "O", "X"],
      ["O", "X", "O", "O", "O"],
      ["X", "X", "O", "X", "O"],
    ]);
  });
});
