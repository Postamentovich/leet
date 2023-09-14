function carFleet(target: number, position: number[], speed: number[]): number {
    const stack: { pos: number, time: number }[] = position.map((pos, i) => ({
        pos,
        time: (target - pos) / speed[i]
    })).sort((a, b) => a.pos - b.pos);

    const resultStack = [];

    for (let i = stack.length - 1; i >= 0; i--) {
        const current = stack[i];

        const next = resultStack[resultStack.length - 1];

        if (next && next.time >= current.time) {
            continue;
        }

        resultStack.push(current)
    }

    return resultStack.length;
};