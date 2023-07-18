function successfulPairs(spells: number[], potions: number[], success: number): number[] {
    const result = [];

    potions.sort((a, b) => a - b);

    for (let i = 0; i < spells.length; i++) {

        const spell = spells[i];
        let left = 0;
        let right = potions.length - 1;
        let count = 0;

        while (left <= right) {
            const pivotIndex = Math.round((left + right) / 2);
            const potion = potions[pivotIndex];
            const pivotStrength = potion * spell;

            if (pivotStrength >= success) {
                count = Math.max(count, potions.length - pivotIndex);
                right = pivotIndex - 1;
            } else {
                left = pivotIndex + 1;
            }
        }

        result.push(count)
    }

    return result;
};