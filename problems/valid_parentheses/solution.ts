function isValid(s: string): boolean {
    const close = [']', ')', '}'];
    const openMap = {
        ']': '[',
        ')': '(',
        '}': '{'
    }
    const stack = [];

    for (const symbol of s) {
        if (close.includes(symbol)) {
            const last = stack.pop();
            if (last !== openMap[symbol]) {
                return false;
            }
        } else {
            stack.push(symbol);
        }
    }

    return stack.length === 0;
};