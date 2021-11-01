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