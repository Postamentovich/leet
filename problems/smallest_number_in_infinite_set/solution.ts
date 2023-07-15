class SmallestInfiniteSet {
    currentMin = 1;
    addedNumbers = [];

    constructor() {

    }

    popSmallest(): number {
        if (this.addedNumbers.length) {
            return this.addedNumbers.shift()
        } else {
            const min = this.currentMin;
            this.currentMin++
            return min;
        }
    }

    addBack(num: number): void {
        if (num < this.currentMin) {
            if (!this.addedNumbers.includes(num)) {
                this.addedNumbers.push(num)
                this.addedNumbers = this.addedNumbers.sort((a, b) => a - b)
            }
        }
    }
}

/**
 * Your SmallestInfiniteSet object will be instantiated and called as such:
 * var obj = new SmallestInfiniteSet()
 * var param_1 = obj.popSmallest()
 * obj.addBack(num)
 */