function mySqrt(x: number): number {
    let result = x;
    let precision = 0.00001;
    while (Math.abs(x - result * result) > precision) {
        result = (result + x / result) / 2
    }
    return Math.floor(result)
};