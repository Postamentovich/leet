function maxProfit(prices: number[]): number {
    let profit = 0;
    let buy = 0;
    let sell = 1;


    while (sell < prices.length) {
        const currentProfit = prices[sell] - prices[buy];

        if (currentProfit < 0) {
            buy = sell;
        } else {
            profit = Math.max(currentProfit, profit);
        }
        
        sell++;
    }

    return profit;
};