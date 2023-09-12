function generateParenthesis(n: number): string[] {
    const result = [];

    function addParenthes(open: boolean, current: string[], openCount: number, closeCount: number) {
        current.push(open ? '(' : ')');
        open ? openCount++ : closeCount++;

        if (current.length === n * 2) {
            result.push(current.join(''));
            return;
        }

        if (openCount < n) {
            addParenthes(true, [...current], openCount, closeCount);
        }
        if (closeCount < openCount) {
            addParenthes(false, [...current], openCount, closeCount);
        }
    }

    addParenthes(true, [], 0, 0);


    return result;
};