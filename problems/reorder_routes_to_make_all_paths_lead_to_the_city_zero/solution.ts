function minReorder(n: number, connections: number[][]): number {
    const cities = new Map();

    for (let i = 0; i < n; i++) {
        cities.set(i, {
            in: [],
            out: [],
        })
    }

    for (let i = 0; i < connections.length; i++) {
        const [a, b] = connections[i];
        const aCity = cities.get(a);
        cities.set(a, {
            ...aCity,
            out: [...aCity.out, b],
        });
        const bCity = cities.get(b);
        cities.set(b, {
            ...bCity,
            in: [...bCity.in, a]
        })
    }

    let result = 0;
    
    const visited = new Set();

    const stack = [0];

    while (stack.length) {
        const node = stack.shift();
        
        if (visited.has(node)) {
            continue;
        }

        visited.add(node);
        
        const city = cities.get(node);

        for (const outCity of city.out) {
            if (!visited.has(outCity)) {
                result++;
                stack.push(outCity);
            }
        }

        for (const inCity of city.in) {
            if (!visited.has(inCity)) {
                stack.push(inCity);
            }
        }

    }

    return result;
};