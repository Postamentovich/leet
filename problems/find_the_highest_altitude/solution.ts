function largestAltitude(gain: number[]): number {
    let current = 0;
    let maximum = 0;

    for (const change of gain) {
        current += change;
        maximum = Math.max(maximum, current);
    }

    return maximum;
};