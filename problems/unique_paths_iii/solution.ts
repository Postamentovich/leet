type Coordinates = [number, number];

function insideRange(value: number, minValue: number, maxValue: number) {
  return value >= minValue && value <= maxValue;
}

enum Cell {
  Start = 1,
  End = 2,
  Empty = 0,
  Obstacle = -1,
}

function findStart(grid: number[][]): { start: Coordinates; emptyColumns: number } {
  let start: Coordinates = [0, 0];
  let emptyColumns = 2;

  for (let rowIndex = 0; rowIndex < grid.length; rowIndex++) {
    const row = grid[rowIndex];
    for (let columnIndex = 0; columnIndex < row.length; columnIndex++) {
      const column = row[columnIndex];
      if (column === Cell.Start) {
        start = [rowIndex, columnIndex];
      } else if (column === Cell.Empty) {
        emptyColumns++;
      }
    }
  }
  return { start, emptyColumns };
}

function getVisitedKey([row, column]: Coordinates) {
  return `r${row},c${column}`;
}

function uniquePathsIII(grid: number[][]): number {
  const rows = grid.length;
  const columns = grid[0].length;
  let result = 0;
  const { start, emptyColumns } = findStart(grid);

  function isFinish([row, column]: Coordinates) {
    return grid[row][column] === Cell.End;
  }

  function findPath(step: Coordinates, path: Coordinates[], visited: Set<string>) {
    if (isFinish(step)) {
      if (path.length === emptyColumns) {
        result++;
        return;
      }
    }

    function canStep([row, column]: Coordinates) {
      if (visited.has(getVisitedKey([row, column]))) {
        return false;
      }
      if (!insideRange(row, 0, rows - 1)) {
        return false;
      }
      if (!insideRange(column, 0, columns - 1)) {
        return false;
      }
      const value = grid[row][column];
      if (value === Cell.Empty || value === Cell.End) {
        return true;
      }
      return false;
    }

    const [row, column] = step;

    visited.add(getVisitedKey(step));

    const rightCoordinates: Coordinates = [row, column + 1];
    if (canStep(rightCoordinates)) {
      findPath(rightCoordinates, [...path, rightCoordinates], new Set(visited));
    }
    const leftCoordinates: Coordinates = [row, column - 1];
    if (canStep(leftCoordinates)) {
      findPath(leftCoordinates, [...path, leftCoordinates], new Set(visited));
    }
    const downCoordinates: Coordinates = [row + 1, column];
    if (canStep(downCoordinates)) {
      findPath(downCoordinates, [...path, downCoordinates], new Set(visited));
    }
    const upCoordinates: Coordinates = [row - 1, column];
    if (canStep(upCoordinates)) {
      findPath(upCoordinates, [...path, upCoordinates], new Set(visited));
    }
  }

  findPath(start, [start], new Set(getVisitedKey(start)));

  return result;
}