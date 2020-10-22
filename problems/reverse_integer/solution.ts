function reverse(x: number): number {
    const maxRange = 2 ** 31;
    console.log("maxRange", maxRange)
    if (x >= maxRange || x < -maxRange) return 0;
    const isPositive = x > 0;
    const reversed = Number(String(Math.abs(x)).split('').reverse().join(''));
    const result = isPositive ? reversed : -reversed;
    if (result >= maxRange || result < -maxRange) return 0;
    return result
};