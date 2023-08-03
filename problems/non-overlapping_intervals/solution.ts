function eraseOverlapIntervals(intervals: number[][]): number {
    intervals.sort((a, b) => a[0] - b[0])
    let result = 0;
    let prevEnd = intervals[0][1];
    for (let i = 1; i < intervals.length; i++) {
        const [start, end] = intervals[i];
        if (start >= prevEnd) {
            prevEnd = end;
        } else {
            result++;
            prevEnd = Math.min(prevEnd, end)
        }
    }

    return result;
};  