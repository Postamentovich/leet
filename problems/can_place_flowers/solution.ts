function canPlaceFlowers(flowerbed: number[], n: number): boolean {
    let flowersCount = n;

    for (let i = 0; i < flowerbed.length; i++) {
        if (flowersCount === 0) {
            break;
        }

        const isEmptyPlace = flowerbed[i] === 0;

        if (!isEmptyPlace) {
            continue;
        }

        const hasPreviousFlower = flowerbed[i - 1];
        const hasNextFlower = flowerbed[i + 1];

        if (hasPreviousFlower || hasNextFlower) {
            continue;
        }

        flowersCount--;

        flowerbed[i] = 1;
    }

    return !Boolean(flowersCount);
};