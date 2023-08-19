class RandomizedSet {
    store: number[];

    constructor() {
        this.store = [];
    }

    insert(val: number): boolean {
        if (this.store.includes(val)) {
            return false;
        }

        this.store.push(val);
        return true;
    }

    remove(val: number): boolean {
        if (this.store.includes(val)) {
            this.store = this.store.filter((num) => num !== val);
            return true;
        }

        return false;
    }

    getRandom(): number {
        const index = Math.floor(Math.random() * this.store.length);
        return this.store[index];
    }
}

/**
 * Your RandomizedSet object will be instantiated and called as such:
 * var obj = new RandomizedSet()
 * var param_1 = obj.insert(val)
 * var param_2 = obj.remove(val)
 * var param_3 = obj.getRandom()
 */