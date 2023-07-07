function predictPartyVictory(senate: string): string {
    const queue = senate.split('');

    while (queue.length) {
        const current = queue.shift();
        const opposite = current === 'R' ? 'D' : 'R'
        const index = queue.findIndex(item => item === opposite);
        if (index > - 1) {
            queue.splice(index, 1);
            queue.push(current);
        } else {
            return current === 'R' ? 'Radiant' : 'Dire'
        }
    }
};