function decodeString(s: string): string {
    const stack = [];
    const digits = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

    for (let i = 0; i < s.length; i++) {
        const char = s[i];

        if (char === ']') {
            const currentSubString = [];
            const currentCount = [];
            let isClosed = false;

            while (stack.length) {
                const lastChar = stack.pop();

                if (isClosed && !digits.includes(lastChar)) {
                    stack.push(lastChar);
                    break;
                }


                if (lastChar === '[') {
                    isClosed = true;
                } else if (isClosed && digits.includes(lastChar)) {
                    currentCount.unshift(lastChar);
                } else {
                    currentSubString.unshift(lastChar);
                }
            }

            const count = parseInt(currentCount.join(''), 10);

            for (let i = 0; i < count; i++) {
                stack.push(...currentSubString);
            }

        } else {
            stack.push(char);
        }
    }

    return stack.join('');
};