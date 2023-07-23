function numTilings(n: number): number {
    const MODULO_DIVISOR = (10 ** 9 + 7);

    let current = 0;
    let prevOne = 0;
    let prevTwo = 0;
    let prevGteThree = 0;
    for (let i = 1; i <= n; i++) {
        prevGteThree += prevTwo;
        prevTwo = prevOne;
        prevOne = current;
        current = (i >= 3 ? 2 : 1) + prevOne + prevTwo + prevGteThree * 2;
        current %= MODULO_DIVISOR;
    }
    return current;
};