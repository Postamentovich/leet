function minCostClimbingStairs(cost: number[]): number {
    if (!cost.length) {
        return 0;
    }


    const result = new Array(cost.length + 1);
    result[cost.length] = 0;
    result[cost.length - 1] = cost[cost.length - 1];

    for (let i  = cost.length - 2; i >= 0; i--) {
        const stepCost = cost[i];
        const step1Cost = result[i + 1];
        const step2Cost = result[i + 2];
        result[i] = stepCost + Math.min(step1Cost, step2Cost);
    }

    return Math.min(result[0], result[1])
};