function tribonacci(n: number): number {
    const numbers = [0, 1, 1];

    for(let i = 3; i <=n; i++) {
        numbers[i] = numbers[i - 1] + numbers[i - 2] + numbers[i - 3];
    }

    return numbers[n]
};