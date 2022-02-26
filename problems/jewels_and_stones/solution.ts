function numJewelsInStones(jewels: string, stones: string): number {
  let count = 0;
  stones.split("").forEach((stone) => {
    if (jewels.includes(stone)) {
      count++;
    }
  });
  return count;
}