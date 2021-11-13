// https://leetcode.com/problems/daily-temperatures/

function dailyTemperatures(temperatures: number[]): number[] {
  const result: number[] = [];

  loop1: for (let i = 0; i < temperatures.length; i++) {
    for (let j = i + 1; j < temperatures.length; j++) {
      if (temperatures[j] > temperatures[i]) {
        result.push(j - i);
        continue loop1;
      }
    }
    result.push(0);
  }

  return result;
}

describe("daily-temperatures", () => {
  it("case 1", () => {
    expect(dailyTemperatures([73, 74, 75, 71, 69, 72, 76, 73])).toEqual([1, 1, 4, 2, 1, 1, 0, 0]);
  });
  it("case 2", () => {
    expect(dailyTemperatures([30, 40, 50, 60])).toEqual([1, 1, 1, 0]);
  });
  it("case 3", () => {
    expect(dailyTemperatures([30, 60, 90])).toEqual([1, 1, 0]);
  });
});
