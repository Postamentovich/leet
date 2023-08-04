function findMinArrowShots(points: number[][]): number {
    if (!points.length) {
        return 0;
    }
    points.sort((a, b) => a[1] - b[1]);
    let count = 1;
    let previousShot = points[0][1];
    for (let i = 1; i < points.length; i++) {
        const [start, end] = points[i];

        if (previousShot >= start) {
            continue;
        }

        count++;
        previousShot = end;
    }
    return count;
};