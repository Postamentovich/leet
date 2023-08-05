class StockSpanner {
    private s: Array<[number, number]>
    constructor() {
        this.s = []
    }

    next(price: number): number {
        let span = 1;
        while(this.s.length && this.s[this.s.length - 1][0] <= price) {
            span += this.s[this.s.length - 1][1]
            this.s.pop();
        }
        this.s.push([price, span]);
        return span;
    }
}

/**
 * Your StockSpanner object will be instantiated and called as such:
 * var obj = new StockSpanner()
 * var param_1 = obj.next(price)
 */