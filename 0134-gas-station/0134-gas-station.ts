function canCompleteCircuit(gas: number[], cost: number[]): number {
    mainLoop:
    for (let i = 0; i < gas.length; i++) {
        let totalGas = 0;
        for (let j = 0; j < gas.length; j++) {
            const currentIndex = i + j >= gas.length ? i+ j - gas.length : i + j;
            totalGas += gas[currentIndex];
            const requiredToNext = cost[currentIndex];
            
            if (requiredToNext <= totalGas) {
               totalGas -= requiredToNext; 
            } else {
                continue mainLoop;
            }
        }
        
        return i;
        
    }
    return -1;
};