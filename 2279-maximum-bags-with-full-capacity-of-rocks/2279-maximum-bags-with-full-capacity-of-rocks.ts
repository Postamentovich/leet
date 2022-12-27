function maximumBags(capacity: number[], rocks: number[], additionalRocks: number): number {
    let availableRocks = additionalRocks;
    let fullBags = 0;
    
    rocks
        .map((rock, index) => {
            const bagCapacity = capacity[index];
            return bagCapacity - rock;
        })
        .sort((a, b) => a - b)
        .forEach((needAdd) => {
            if (needAdd === 0) {
                fullBags++;
                return
            }
            if (availableRocks === 0) {
                return;
            }
            if (needAdd <= availableRocks) {
                availableRocks = availableRocks - needAdd;
                fullBags++;
            }
        })
    

    return fullBags;
};