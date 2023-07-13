function nearestExit(maze: string[][], entrance: number[]): number {
    const visited = new Set();
    const rowLength = maze.length;
    const colLength = maze[0].length;
    const getKey = ([row, col]: number[]) => `${row}:${col}`;

    const isExit = (step: number[]) => {
        if (getKey(entrance) === getKey(step)) {
            return false;
        }
        const isRowBorder = step[0] === 0 || step[0] === rowLength - 1;
        const isColBorder = step[1] === 0 || step[1] === colLength - 1;
        return isRowBorder || isColBorder;
    }

    const canGo = (step: number[]) => {
        if (visited.has(getKey(step))) {
            return false;
        }
        const [row, col] = step;
        return maze[row]?.[col] === '.';
    }

    const queue: [number[], number][] = [[entrance, 0]];

    while (queue.length) {
        const [step, path] = queue.shift();
        
        visited.add(getKey(step));

        if (isExit(step)) {
            return path;
        }

        const up = [step[0] - 1, step[1]];
        if (canGo(up)) {
            visited.add(getKey(up))
            queue.push([up, path + 1])
        }
        const down = [step[0] + 1, step[1]];
        if (canGo(down)) {
            visited.add(getKey(down))
            queue.push([down, path + 1])
        }
        const left = [step[0], step[1] - 1];
        if (canGo(left)) {
            visited.add(getKey(left))
            queue.push([left, path + 1])
        }
        const right = [step[0], step[1] + 1];
        if (canGo(right)) {
            visited.add(getKey(right))
            queue.push([right, path + 1])
        }
    }

    return -1;
};