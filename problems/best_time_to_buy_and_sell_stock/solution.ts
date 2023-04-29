function maxProfit(prices: number[]): number {
  let buyIndex = 0;
  let sellIndex = 1;
  let result = 0;

  while (sellIndex < prices.length) {
    const buyPrice = prices[buyIndex];
    const sellPrice = prices[sellIndex];

    if (sellPrice > buyPrice) {
      const profit = sellPrice - buyPrice;
      result = Math.max(result, profit);
    } else {
      buyIndex = sellIndex;
    }

    sellIndex++;
  }

  return result;
};