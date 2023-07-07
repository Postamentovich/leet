class RecentCounter {
    requests: number[] = [];

    constructor() {
    }

    ping(t: number): number {
        this.requests.push(t);
        

        const allowed = t - 3000;

        while (this.requests[0] < allowed) {
            this.requests.shift();
        }

        return this.requests.length;
    }
}

/**
 * Your RecentCounter object will be instantiated and called as such:
 * var obj = new RecentCounter()
 * var param_1 = obj.ping(t)
 */