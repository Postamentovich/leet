function maxIceCream(costs: number[], coins: number): number {
    let result = 0;
    let availableCoins = coins;
    const sortedCosts = costs.sort((a, b) => a - b);
    for (const cost of sortedCosts) {
        if (cost > availableCoins) {
            break;
        }
        result++;
        availableCoins = availableCoins - cost;
    }
    return result;
};