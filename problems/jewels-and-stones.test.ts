//leetcode.com/problems/jewels-and-stones/

function numJewelsInStones(jewels: string, stones: string): number {
  let count = 0;
  stones.split("").forEach((stone) => {
    if (jewels.includes(stone)) {
      count++;
    }
  });
  return count;
}

describe("jewels-and-stones", () => {
  it("case 1", () => {
    expect(numJewelsInStones("aA", "aAAbbbb")).toBe(3);
  });
  it("case 1", () => {
    expect(numJewelsInStones("z", "ZZ")).toBe(0);
  });
});
