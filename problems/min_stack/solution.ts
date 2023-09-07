class MinStack {
    stack: { val: number; min: number }[];

    constructor() {
        this.stack = [];
    }

    push(val: number): void {
        const previousMin = this.stack[this.stack.length - 1]?.min ?? Infinity;
        this.stack.push({ val, min: Math.min(val, previousMin) });
    }

    pop(): void {
        this.stack.pop()
    }

    top(): number {
        return this.stack[this.stack.length - 1]?.val;
    }

    getMin(): number {
        return this.stack[this.stack.length - 1]?.min;
    }
}

/**
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(val)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */