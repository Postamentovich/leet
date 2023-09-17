function plusOne(digits: number[]): number[] {
    const num = BigInt(digits.join(''));
    return String(num + 1n).split('').map(dig => Number(dig))
};