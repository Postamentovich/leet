function canCompleteCircuit(gas: number[], cost: number[]): number {
    let gasStation = 0;
    let tank = 0;
    let total = 0;

    for (let i = 0; i < gas.length; i++) {
        const currentCost = gas[i] - cost[i];
        tank += currentCost;
        total += currentCost;

        if (tank < 0) {
            gasStation = i + 1;
            tank = 0;
        }
    }

    if (total < 0) {
        return -1;
    }

    return gasStation;
};