// https://leetcode.com/problems/reducing-dishes/

function maxSatisfaction(satisfaction: number[]): number {
  const sortedSatisfaction = satisfaction.sort((a, b) => a - b);
  let result = 0;
  while (sortedSatisfaction.length) {
    const tempResult = sortedSatisfaction.reduce((acc, value, index) => {
      return acc + value * (index + 1);
    }, 0);
    if (tempResult > result) {
      result = tempResult;
    }
    sortedSatisfaction.shift();
  }
  return result;
}

describe("reducing-dishes", () => {
  it("case 1", () => {
    expect(maxSatisfaction([-1, -8, 0, 5, -9])).toBe(14);
  });
  it("case 2", () => {
    expect(maxSatisfaction([4, 3, 2])).toBe(20);
  });
  it("case 3", () => {
    expect(maxSatisfaction([-1, -4, -5])).toBe(0);
  });
  it("case 4", () => {
    expect(maxSatisfaction([-2, 5, -1, 0, 3, -3])).toBe(35);
  });
});
