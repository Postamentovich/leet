function findMinArrowShots(points: number[][]): number {
    if (!points.length) {
        return 0;
    }
    const sortedPoints = points.sort((a, b) => a[0] - b[0]);
    let arrowsCount = 1;
    let maxX = sortedPoints[0][1];

    for (let i = 1; i < sortedPoints.length; i++) {
        const balloon = sortedPoints[i];
        if (maxX > balloon[1]) {
            maxX = balloon[1];
        }
        
        if (balloon[0] <= maxX) {
            continue;
        } 
        
        arrowsCount++;
        maxX = balloon[1];
    }
    return arrowsCount;
    
};