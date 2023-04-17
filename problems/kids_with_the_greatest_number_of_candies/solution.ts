function kidsWithCandies(candies: number[], extraCandies: number): boolean[] {
    const maximumCandies = Math.max(...candies);
    return candies.map(count => {
        if (count + extraCandies >= maximumCandies) {
            return true;
        }
        return false;
    })
};