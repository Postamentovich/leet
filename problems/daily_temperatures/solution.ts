function dailyTemperatures(temperatures: number[]): number[] {
    const result = [];
    const stack = []; // [val, ind]

    for (let i = 0; i < temperatures.length; i++) {
        const value = temperatures[i];
        while (stack.length && stack[stack.length - 1][0] < value) {
            const [_, ind] = stack.pop();
            result[ind] = i - ind;
        }
        stack.push([value, i]);
    }

    stack.forEach(([_, index]) => {
        result[index] = 0;
    })

    return result;
};