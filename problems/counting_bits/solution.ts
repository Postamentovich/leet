function countBits(n: number): number[] {
    const res = new Uint8Array(n + 1);
    for (let i = 0; i < res.length; i++) res[i] = res[i >> 1] + (i & 1);
    return [...res];
};