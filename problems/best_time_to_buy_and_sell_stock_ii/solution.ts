function maxProfit(prices: number[]): number {
    let profit = 0;

    for (let i = 0; i < prices.length - 1; i++) {
        const currentPrice = prices[i];
        const nextPrice = prices[i + 1];
        const currentProfit = nextPrice - currentPrice;
        if (currentProfit > 0) {
            profit += currentProfit;
        }
    }
    
    return profit;
};