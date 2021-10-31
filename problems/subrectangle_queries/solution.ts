class SubrectangleQueries {
  constructor(private rectangle: number[][]) {}

  private insideRange(value: number, minValue: number, maxValue: number) {
    return value >= minValue && value <= maxValue;
  }

  updateSubrectangle(row1: number, col1: number, row2: number, col2: number, newValue: number): void {
    this.rectangle = this.rectangle.map((row, rowIndex) => {
      return row.map((column, columnIndex) => {
        if (this.insideRange(rowIndex, row1, row2) && this.insideRange(columnIndex, col1, col2)) {
          return newValue;
        }
        return column;
      });
    });
  }

  getValue(row: number, col: number): number {
    return this.rectangle[row][col];
  }
}


/**
 * Your SubrectangleQueries object will be instantiated and called as such:
 * var obj = new SubrectangleQueries(rectangle)
 * obj.updateSubrectangle(row1,col1,row2,col2,newValue)
 * var param_2 = obj.getValue(row,col)
 */