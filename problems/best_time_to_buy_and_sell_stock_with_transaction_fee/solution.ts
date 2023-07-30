function maxProfit(prices: number[], fee: number): number {
    const n = prices.length;
    let free = 0; let hold = -prices[0];

    for (let i = 0; i < n; i++) {
        const tmp = hold;
        hold = Math.max(hold, free - prices[i]);
        free = Math.max(free, tmp + prices[i] - fee);
    }

    return free;
};