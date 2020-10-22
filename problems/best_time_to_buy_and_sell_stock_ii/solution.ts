function maxProfit(prices: number[]): number {
    let maxProfit = 0;
    
    let prevPrice = prices[0];
    
    for (let i = 1; i < prices.length; i++) {
        const nextPrice = prices[i];
        
        const profit = nextPrice - prevPrice;
        
        if (profit > 0) maxProfit += profit;
        
        prevPrice = nextPrice;
    }

    return maxProfit;
};