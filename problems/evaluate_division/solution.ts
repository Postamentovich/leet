function calcEquation(equations: string[][], values: number[], queries: string[][]): number[] {
    const valueByNum = new Map<string, [string, number][]>();

    for (let i = 0; i < equations.length; i++) {
        const [a, b] = equations[i];
        const value = values[i];
        const currentA = valueByNum.get(a) || [];
        const currentB = valueByNum.get(b) || [];
        valueByNum.set(a, [...currentA, [b, value]]);
        valueByNum.set(b, [...currentB, [a, 1 / value]]);
    }

    function find(src: string, target: string): number {
        if (!valueByNum.get(src) || !valueByNum.get(target)) {
            return -1;
        }
        const visited = new Set();
        const stack: [string, number][] = [[src, 1]];

        while (stack.length) {
            const [value, weight] = stack.shift();

            visited.add(value);

            if (value === target) {
                return weight;
            }

            for (const [node, nodeWeight] of valueByNum.get(value)) {
                if (!visited.has(node)) {
                    stack.push([node, weight * nodeWeight]);
                }
            }
        }

        return -1;
    }


    return queries.map(([src, target]) => find(src, target));
};